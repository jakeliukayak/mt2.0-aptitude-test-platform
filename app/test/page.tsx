'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getCombinedTestQuestions, type Question } from '@/lib/questionBank';
import { updateTestCompletion } from '@/lib/supabaseTestManager';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function TestPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [participantId, setParticipantId] = useState<string | null>(null);

  // Initialize test
  useEffect(() => {
    // Check if user came from landing page
    const storedParticipantId = localStorage.getItem('participantId');
    if (!storedParticipantId) {
      // Redirect back to landing page if no participant ID
      router.push('/');
      return;
    }

    setParticipantId(storedParticipantId);

    // Initialize questions
    const testQuestions = getCombinedTestQuestions();
    setQuestions(testQuestions);
    setUserAnswers(new Array(testQuestions.length).fill(null));
  }, [router]);

  // Timer effect
  useEffect(() => {
    if (questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Auto-advance to next question
          handleNextQuestion();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, questions.length]);

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    // Store answer
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex === questions.length - 1) {
      // Test complete - calculate score and navigate to results
      finishTest();
    } else {
      // Move to next question
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeRemaining(60);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  }, [currentQuestionIndex, questions.length, userAnswers, participantId]);

  const finishTest = async () => {
    // Calculate score
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        score++;
      }
    });

    // Update Supabase with completion
    if (participantId) {
      await updateTestCompletion(participantId, score);
    }

    // Store score for results page
    localStorage.setItem('testScore', score.toString());
    localStorage.setItem('totalQuestions', questions.length.toString());

    // Store category breakdown
    const breakdown = calculateCategoryBreakdown();
    localStorage.setItem('categoryBreakdown', JSON.stringify(breakdown));

    // Navigate to results
    router.push('/results');
  };

  const calculateCategoryBreakdown = () => {
    const breakdown: Record<string, { correct: number; total: number }> = {
      numerical: { correct: 0, total: 0 },
      verbal: { correct: 0, total: 0 },
      inductive: { correct: 0, total: 0 },
      deductive: { correct: 0, total: 0 },
    };

    questions.forEach((question, index) => {
      const category = question.category;
      breakdown[category].total++;
      if (userAnswers[index] === question.correct) {
        breakdown[category].correct++;
      }
    });

    return breakdown;
  };

  const handleQuitTest = () => {
    if (confirm('Are you sure you want to quit the test? Your progress will be lost.')) {
      localStorage.removeItem('participantId');
      localStorage.removeItem('participantName');
      router.push('/');
    }
  };

  if (questions.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Loading test...</p>
        </div>
      </main>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const timerClass = timeRemaining <= 5 ? 'timer danger' : timeRemaining <= 10 ? 'timer warning' : 'timer';

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-4xl">
        <div className="card relative">
          {/* Quit Button */}
          <button
            onClick={handleQuitTest}
            className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition-all"
          >
            Quit Test
          </button>

          {/* Test Header */}
          <div className="relative mb-8 pb-4 border-b-2 border-gray-200 min-h-[100px] md:min-h-[120px]">
            {/* Question Counter - Left */}
            <div className="absolute left-0 top-0 flex flex-col gap-1">
              <span className="font-medium text-sm md:text-base">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                Combined Test
              </span>
            </div>

            {/* Logo - Center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src={`${basePath}/logo.svg`}
                alt="MT2.0 Logo"
                width={80}
                height={80}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                unoptimized
              />
            </div>

            {/* Timer - Right */}
            <div className="absolute right-0 top-0">
              <div className={timerClass}>
                {timeRemaining}
              </div>
            </div>
          </div>

          {/* Question Container */}
          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-normal leading-relaxed mb-6 whitespace-pre-wrap">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let optionClass = 'option-btn';
                
                if (isAnswered) {
                  if (index === currentQuestion.correct) {
                    optionClass += ' correct';
                  } else if (index === selectedOption) {
                    optionClass += ' incorrect';
                  }
                  optionClass += ' disabled';
                } else if (index === selectedOption) {
                  optionClass += ' selected';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={optionClass}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              className="btn-primary px-8"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish Test' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

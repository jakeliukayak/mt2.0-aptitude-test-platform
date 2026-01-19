'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface CategoryBreakdown {
  numerical: { correct: number; total: number };
  verbal: { correct: number; total: number };
  inductive: { correct: number; total: number };
  deductive: { correct: number; total: number };
}

export default function ResultsPage() {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(8);
  const [categoryBreakdown, setCategoryBreakdown] = useState<CategoryBreakdown | null>(null);

  useEffect(() => {
    // Get score from localStorage
    const storedScore = localStorage.getItem('testScore');
    const storedTotal = localStorage.getItem('totalQuestions');
    const storedBreakdown = localStorage.getItem('categoryBreakdown');

    if (!storedScore) {
      // Redirect to home if no score
      router.push('/');
      return;
    }

    setScore(parseInt(storedScore, 10));
    setTotalQuestions(parseInt(storedTotal || '8', 10));

    if (storedBreakdown) {
      setCategoryBreakdown(JSON.parse(storedBreakdown));
    }
  }, [router]);

  const handleTakeAnotherTest = () => {
    // Clear localStorage
    localStorage.removeItem('participantId');
    localStorage.removeItem('participantName');
    localStorage.removeItem('testScore');
    localStorage.removeItem('totalQuestions');
    localStorage.removeItem('categoryBreakdown');

    // Navigate to home
    router.push('/');
  };

  const percentage = Math.round((score / totalQuestions) * 100);

  // Score message based on percentage
  let message = '';
  if (percentage >= 90) {
    message = 'Outstanding! Excellent performance!';
  } else if (percentage >= 70) {
    message = 'Great job! Well done!';
  } else if (percentage >= 50) {
    message = 'Good effort! Keep practicing!';
  } else {
    message = "Keep learning! You'll improve with practice!";
  }

  const categoryNames: Record<string, string> = {
    numerical: 'Numerical Reasoning',
    verbal: 'Verbal Reasoning',
    inductive: 'Inductive Reasoning',
    deductive: 'Deductive Reasoning',
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-2xl">
        <div className="card">
          <h1 className="text-3xl md:text-4xl font-medium text-center mb-8">Test Complete!</h1>

          {/* Results Container */}
          <div className="flex flex-col items-center gap-6 mb-8">
            {/* Score Circle */}
            <div className="score-circle">
              <span className="text-4xl md:text-5xl font-medium text-white">
                {percentage}%
              </span>
            </div>

            {/* Score Details */}
            <div className="text-center">
              <p className="text-xl md:text-2xl mb-2">
                You scored{' '}
                <span className="font-medium" style={{ color: 'var(--button-primary)' }}>
                  {score}/{totalQuestions}
                </span>
              </p>
              <p className="text-lg text-gray-600">{message}</p>
            </div>

            {/* Category Breakdown */}
            {categoryBreakdown && (
              <div className="w-full mt-4">
                <h3 className="text-lg font-medium mb-4 text-center">Breakdown by Category</h3>
                <div className="space-y-2">
                  {Object.entries(categoryBreakdown).map(([category, data]) => (
                    <div
                      key={category}
                      className="flex justify-between items-center p-3 bg-gray-100 rounded-lg"
                    >
                      <span className="font-medium">{categoryNames[category]}</span>
                      <span className="text-gray-600">
                        {data.correct}/{data.total}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Take Another Test Button */}
          <button
            onClick={handleTakeAnotherTest}
            className="btn-primary w-full text-lg py-3"
          >
            Take Another Test
          </button>

          {/* Footer */}
          <div className="footer">
            <h3 className="text-lg font-medium mb-3">Stay in Touch!</h3>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/mt2.0careercoach"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow us for more career tips 🤓
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">© 2025 MT2.0. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

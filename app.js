// Aptitude Test Platform Application

// Question Bank - 5 questions for each category
const questionBank = {
  numerical: [
    {
      question: 'Jake completed 1/2 of a task before going on vacation. Victor took over and manage to complete 25% of the remaining task. How much of the task is still pending?',
      options: ['12.5%', '25%', '37.5%', '75%'],
      correct: 1,
    },
    {
      question: 'A wireless phone company. has two pricing plans. Plan A costs $50/month for unlimited talk. Plan B costs $30/month for 400 minutes and $0.10 for each additional minute. If a consumer averages 675 minutes per month, what would be the difference in cost between the two pricing plans?',
      options: ['Plan A would cost $10 more/month', 'Plan A would cost $4.50 more/month', 'Plan B would cost $5.25 more/month', 'Plan B would cost $7.50 more/month'],
      correct: 3,
    },
    {
      question: 'A group of four numbers has an average (arithmetic mean) of 30. The first three numbers are 32, 26, and 24. What is the other number?',
      options: ['30', '33', '38', '48'],
      correct: 2,
    },
    {
      question: 'Which of the following is the smallest value?',
      options: ['0.709', '1.079', '0.097', '0.907'],
      correct: 2,
    },
    {
      question: 'A family drives 300 miles on a road trip. They take a longer route to avoid traffic on their return trip, traveling 45% further. How many miles did the family drive during their return trip?',
      options: ['405', '415', '425', '435'],
      correct: 3,
    },
  ],
  verbal: [
    {
      question: 'Choose the word that is most similar in meaning to "ABUNDANT".',
      options: ['Scarce', 'Plentiful', 'Limited', 'Rare'],
      correct: 1,
    },
    {
      question: 'Choose the word that is opposite in meaning to "EXPAND".',
      options: ['Grow', 'Contract', 'Increase', 'Enlarge'],
      correct: 1,
    },
    {
      question: 'Complete the analogy: Book is to Reading as Fork is to ___',
      options: ['Cooking', 'Eating', 'Kitchen', 'Spoon'],
      correct: 1,
    },
    {
      question: 'Which word does NOT belong with the others?',
      options: ['Rose', 'Tulip', 'Oak', 'Daisy'],
      correct: 2,
    },
    {
      question: 'Choose the word that best completes the sentence: "The evidence was ___ and could not be disputed."',
      options: ['Ambiguous', 'Vague', 'Conclusive', 'Doubtful'],
      correct: 2,
    },
    {
      question: 'What is the meaning of the idiom "Break the ice"?',
      options: ['To be cold', 'To initiate conversation', 'To break something', 'To stop talking'],
      correct: 1,
    },
    {
      question: 'Choose the correctly spelled word:',
      options: ['Occurance', 'Ocurrence', 'Occurrence', 'Occurence'],
      correct: 2,
    },
    {
      question: 'Which sentence is grammatically correct?',
      options: ['She don\'t like apples.', 'She doesn\'t likes apples.', 'She doesn\'t like apples.', 'She not like apples.'],
      correct: 2,
    },
    {
      question: 'Choose the word that is most similar to "DILIGENT".',
      options: ['Lazy', 'Careless', 'Hardworking', 'Negligent'],
      correct: 2,
    },
    {
      question: 'Complete the analogy: Hot is to Cold as Day is to ___',
      options: ['Sun', 'Night', 'Light', 'Morning'],
      correct: 1,
    },
  ],
  inductive: [
    {
      question: 'What would be the next number in the following series: 2 ... 5 ... 7 ... 12 ... 19 ... ?',
      options: ['29', '31', '33', '37', '39'],
      correct: 1,
    },
    {
      question: 'What is the missing number in the following sequence: 1, 8, 22, 43, ?, 106 ?',
      options: ['61', '71', '85', '97'],
      correct: 1,
    },
    {
      question: 'What would be the next group of letters in the following series: exkf ... fwke ... gvkd ... hukc ... ?',
      options: ['gukb', 'itkd', 'itkb', 'jtkb', 'ivkd'],
      correct: 2,
    },
      {
      question: 'What is the next number in the following sequence: 26, 37, 50, ?',
      options: ['62', '65', '70', '71'],
      correct: 1,
    },
    {
      question: 'What is the next number in the following sequence: 6, 12, 20, ?',
      options: ['24', '28', '30', '38'],
      correct: 2,
    },
  ],
  deductive: [
    {
      question: 'Statements:\nAll swimmers are athletes.\nSome stars are swimmers.\n\nConclusion:\nI. Some athletes are stars.\nII. Some athletes are swimmers.',
      options: ['Only I follows', 'Both I and II follow', 'Only II follows', 'Neither I nor II follows'],
      correct: 1,
    },
    {
      question: 'Statements:\nAll auditors are accountants.\nSome cashiers are accountants.\nAll accnountants are CFOs.\n\nConclusion:\nI. All CFOs are auditors.\nII. All accountants are auditors.\nIII. Some auditors are cashiers.\IV. Some accountants are cashiers.',
      options: ['Only I follows', 'Only II follows', 'Only III follows', 'Only IV follows'],
      correct: 3,
    },
    {
      question: 'Statements:\nAll monkeys are apes.\nAll ape are primates.\n\nConclusion:\nI. Some primates are apes.\nII. Some primates are monkeys.',
      options: ['Only I follows', 'Both I and II follow', 'Only II follows', 'Neither I nor II follows'],
      correct: 1,
    },
    {
      question: 'In a conference of eight, Ally, Beatrice, Chloe, Dorothy, Eleanore, Flora, Grace, and Hannah are sitting around a circular table facing towards the center.\n\n- Beatrice is seated immediately to the left of Flora.\n- Chloe is sitting between Eleanore and Flora.\n- Eleanore is sitting next to Grace but not to Hannah.\n- Hannah is not sitting next to Dorothy but is seated immediately to the left of Ally.\n\nWho is sitting between Hannah and Eleanore?',
      options: ['Ally', 'Flora', 'Beatrice', 'Grace'],
      correct: 3,
    },    
    {
      question: 'Software Update Information:\n\n- Katarina: must be immediately after Paco\n- Melody: cannot be before Paco\n- Ollie: must be first\n- Lewis: exactly one computer must be updated between Lewis\'s and Katarina\'s\n- Ningning: must be after Lewis\n- Paco: must be before Lewis\n\nWho is the last to be updated?',
      options: ['Ningning', 'Lewis', 'Melody', 'Ollie'],
      correct: 0,
    },
  ],
};

// Application State
let currentMode = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let timerInterval = null;
let timeRemaining = 60;

// DOM Elements
const modeSelectionScreen = document.getElementById('mode-selection');
const testScreen = document.getElementById('test-screen');
const resultsScreen = document.getElementById('results-screen');
const modeButtons = document.querySelectorAll('.mode-btn');
const questionCounter = document.getElementById('question-counter');
const modeName = document.getElementById('mode-name');
const timer = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const quitBtn = document.getElementById('quit-btn');
const scorePercentage = document.getElementById('score-percentage');
const scoreFraction = document.getElementById('score-fraction');
const scoreText = document.getElementById('score-text');
const scoreMessage = document.getElementById('score-message');
const breakdownContainer = document.getElementById('breakdown-container');
const restartBtn = document.getElementById('restart-btn');

// Event Listeners
modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const mode = button.getAttribute('data-mode');
    startTest(mode);
  });
});

nextBtn.addEventListener('click', handleNextQuestion);
restartBtn.addEventListener('click', restartTest);
quitBtn.addEventListener('click', quitTest);

// Initialize test based on mode
function startTest(mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  userAnswers = [];
  score = 0;

  // Select questions based on mode
  if (mode === 'combined') {
    // 2 questions from each category
    currentQuestions = [
      ...getRandomQuestions(questionBank.numerical, 2),
      ...getRandomQuestions(questionBank.verbal, 2),
      ...getRandomQuestions(questionBank.inductive, 2),
      ...getRandomQuestions(questionBank.deductive, 2),
    ];
  } else {
    // 2 questions from the selected category
    currentQuestions = getRandomQuestions(questionBank[mode], 2);
  }

  // Update mode name
  const modeNames = {
    numerical: 'Numerical Reasoning',
    verbal: 'Verbal Reasoning',
    inductive: 'Inductive Reasoning',
    deductive: 'Deductive Reasoning',
    combined: 'Combined Test',
  };
  modeName.textContent = modeNames[mode];

  // Show test screen
  switchScreen('test');
  displayQuestion();
  startTimer();
}

// Get random questions from a category using Fisher-Yates shuffle
function getRandomQuestions(category, count) {
  const shuffled = [...category];
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Display current question
function displayQuestion() {
  const question = currentQuestions[currentQuestionIndex];
  
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  questionText.textContent = question.question;
  
  // Clear and create option buttons
  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = option;
    optionDiv.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optionDiv);
  });

  // Update next button
  if (currentQuestionIndex === currentQuestions.length - 1) {
    nextBtn.textContent = 'Finish Test';
  } else {
    nextBtn.textContent = 'Next Question';
  }
  nextBtn.disabled = true;
}

// Handle option selection
function selectOption(index) {
  const question = currentQuestions[currentQuestionIndex];
  const options = document.querySelectorAll('.option');
  
  // Disable all options after selection
  options.forEach((opt) => {
    opt.classList.add('disabled');
  });

  // Mark the selected option
  options[index].classList.add('selected');
  
  // Show immediate feedback
  if (index === question.correct) {
    // Correct answer
    options[index].classList.remove('selected');
    options[index].classList.add('correct');
  } else {
    // Wrong answer - show the user's incorrect choice
    options[index].classList.remove('selected');
    options[index].classList.add('incorrect');
    // Also highlight the correct answer
    options[question.correct].classList.add('correct');
  }
  
  // Store answer
  userAnswers[currentQuestionIndex] = index;
  
  // Enable next button
  nextBtn.disabled = false;
}

// Handle next question
function handleNextQuestion() {
  stopTimer();

  // Check if this was the last question
  if (currentQuestionIndex === currentQuestions.length - 1) {
    calculateScore();
    showResults();
  } else {
    currentQuestionIndex++;
    displayQuestion();
    resetTimer();
    startTimer();
  }
}

// Timer functions
function startTimer() {
  timeRemaining = 60;
  updateTimerDisplay();
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    // Add warning colors
    if (timeRemaining <= 10 && timeRemaining > 5) {
      timer.classList.add('warning');
      timer.classList.remove('danger');
    } else if (timeRemaining <= 5) {
      timer.classList.add('danger');
      timer.classList.remove('warning');
    } else {
      timer.classList.remove('warning', 'danger');
    }

    // Auto-advance when time runs out
    if (timeRemaining <= 0) {
      handleNextQuestion();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timer.classList.remove('warning', 'danger');
}

function resetTimer() {
  stopTimer();
  timeRemaining = 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  timer.textContent = timeRemaining;
}

// Calculate score
function calculateScore() {
  score = 0;
  currentQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      score++;
    }
  });
}

// Show results
function showResults() {
  const totalQuestions = currentQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  scorePercentage.textContent = `${percentage}%`;
  scoreFraction.textContent = `${score}/${totalQuestions}`;

  // Score message based on percentage
  let message = '';
  if (percentage >= 90) {
    message = 'Outstanding! Excellent performance!';
  } else if (percentage >= 70) {
    message = 'Great job! Well done!';
  } else if (percentage >= 50) {
    message = 'Good effort! Keep practicing!';
  } else {
    message = 'Keep learning! You\'ll improve with practice!';
  }
  scoreMessage.textContent = message;

  // Show breakdown for combined test
  if (currentMode === 'combined') {
    breakdownContainer.innerHTML = '<h3 style="margin-bottom: 16px; color: var(--text-primary);">Breakdown by Category</h3>';
    
    const categories = ['numerical', 'verbal', 'inductive', 'deductive'];
    const categoryNames = {
      numerical: 'Numerical Reasoning',
      verbal: 'Verbal Reasoning',
      inductive: 'Inductive Reasoning',
      deductive: 'Deductive Reasoning',
    };

    categories.forEach((cat, catIndex) => {
      const startIdx = catIndex * 2;
      const endIdx = startIdx + 2;
      const categoryQuestions = currentQuestions.slice(startIdx, endIdx);
      let categoryScore = 0;

      categoryQuestions.forEach((q, qIdx) => {
        if (userAnswers[startIdx + qIdx] === q.correct) {
          categoryScore++;
        }
      });

      const breakdownItem = document.createElement('div');
      breakdownItem.className = 'breakdown-item';
      breakdownItem.innerHTML = `
        <span class="breakdown-category">${categoryNames[cat]}</span>
        <span class="breakdown-score">${categoryScore}/2</span>
      `;
      breakdownContainer.appendChild(breakdownItem);
    });
  } else {
    breakdownContainer.innerHTML = '';
  }

  switchScreen('results');
}

// Switch between screens
function switchScreen(screen) {
  modeSelectionScreen.classList.remove('active');
  testScreen.classList.remove('active');
  resultsScreen.classList.remove('active');

  switch (screen) {
    case 'mode':
      modeSelectionScreen.classList.add('active');
      break;
    case 'test':
      testScreen.classList.add('active');
      break;
    case 'results':
      resultsScreen.classList.add('active');
      break;
  }
}

// Restart test
function restartTest() {
  stopTimer();
  switchScreen('mode');
}

// Quit test
function quitTest() {
  if (confirm('Are you sure you want to quit the test? Your progress will be lost.')) {
    stopTimer();
    switchScreen('mode');
  }
}

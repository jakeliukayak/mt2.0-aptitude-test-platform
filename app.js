// Aptitude Test Platform Application

// Question Bank - 10 questions for each category
const questionBank = {
  numerical: [
    {
      question: 'If a train travels 120 km in 2 hours, what is its average speed in km/h?',
      options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
      correct: 1,
    },
    {
      question: 'What is 15% of 80?',
      options: ['10', '12', '14', '16'],
      correct: 1,
    },
    {
      question: 'A shop offers a 20% discount on a $50 item. What is the final price?',
      options: ['$30', '$35', '$40', '$45'],
      correct: 2,
    },
    {
      question: 'If 5 workers can complete a task in 8 days, how many days will it take 10 workers?',
      options: ['2 days', '4 days', '6 days', '8 days'],
      correct: 1,
    },
    {
      question: 'What is the next number in the sequence: 2, 6, 12, 20, ?',
      options: ['26', '28', '30', '32'],
      correct: 2,
    },
    {
      question: 'A rectangle has a length of 12 cm and width of 5 cm. What is its area?',
      options: ['34 cm²', '50 cm²', '60 cm²', '70 cm²'],
      correct: 2,
    },
    {
      question: 'If x + 5 = 12, what is the value of x?',
      options: ['5', '6', '7', '8'],
      correct: 2,
    },
    {
      question: 'What is 3/4 expressed as a percentage?',
      options: ['65%', '70%', '75%', '80%'],
      correct: 2,
    },
    {
      question: 'A car travels 240 km using 20 liters of fuel. What is the fuel efficiency in km/L?',
      options: ['10 km/L', '12 km/L', '14 km/L', '16 km/L'],
      correct: 1,
    },
    {
      question: 'If the ratio of boys to girls in a class is 3:2 and there are 15 boys, how many girls are there?',
      options: ['8', '10', '12', '15'],
      correct: 1,
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
      question: 'What comes next in the pattern: A, C, E, G, ?',
      options: ['H', 'I', 'J', 'K'],
      correct: 1,
    },
    {
      question: 'Find the pattern: 1, 4, 9, 16, 25, ?',
      options: ['30', '32', '36', '40'],
      correct: 2,
    },
    {
      question: 'Which shape completes the pattern: Circle, Square, Triangle, Circle, Square, ?',
      options: ['Circle', 'Square', 'Triangle', 'Rectangle'],
      correct: 2,
    },
    {
      question: 'What is the next number: 2, 4, 8, 16, ?',
      options: ['24', '28', '32', '36'],
      correct: 2,
    },
    {
      question: 'Find the pattern: AB, CD, EF, GH, ?',
      options: ['IJ', 'HI', 'JK', 'KL'],
      correct: 0,
    },
    {
      question: 'What comes next: Monday, Wednesday, Friday, ?',
      options: ['Saturday', 'Sunday', 'Tuesday', 'Thursday'],
      correct: 1,
    },
    {
      question: 'Pattern: 3, 6, 12, 24, ?',
      options: ['36', '42', '48', '54'],
      correct: 2,
    },
    {
      question: 'What is the next letter: Z, Y, X, W, ?',
      options: ['U', 'V', 'T', 'S'],
      correct: 1,
    },
    {
      question: 'Find the pattern: 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '12', '13', '14'],
      correct: 2,
    },
  ],
  deductive: [
    {
      question: 'All cats are animals. Fluffy is a cat. Therefore:',
      options: ['Fluffy is an animal', 'Fluffy is not an animal', 'All animals are cats', 'Some cats are not animals'],
      correct: 0,
    },
    {
      question: 'If it rains, the ground gets wet. The ground is wet. Therefore:',
      options: ['It must have rained', 'It might have rained', 'It did not rain', 'The sun is shining'],
      correct: 1,
    },
    {
      question: 'All roses are flowers. Some flowers are red. Therefore:',
      options: ['All roses are red', 'Some roses might be red', 'No roses are red', 'All red things are roses'],
      correct: 1,
    },
    {
      question: 'If John is taller than Mary, and Mary is taller than Sue, then:',
      options: ['Sue is taller than John', 'John is taller than Sue', 'Sue is taller than Mary', 'They are all the same height'],
      correct: 1,
    },
    {
      question: 'All doctors are educated. Sarah is educated. Therefore:',
      options: ['Sarah is a doctor', 'Sarah might be a doctor', 'Sarah is not a doctor', 'All educated people are doctors'],
      correct: 1,
    },
    {
      question: 'If A = B and B = C, then:',
      options: ['A ≠ C', 'A = C', 'A > C', 'A < C'],
      correct: 1,
    },
    {
      question: 'No mammals can fly. Bats can fly. Therefore:',
      options: ['Bats are mammals', 'Bats are not mammals', 'Some mammals can fly', 'All flying animals are bats'],
      correct: 1,
    },
    {
      question: 'If all squares are rectangles, and all rectangles are quadrilaterals, then:',
      options: ['All squares are quadrilaterals', 'Some squares are not quadrilaterals', 'No squares are quadrilaterals', 'Quadrilaterals are squares'],
      correct: 0,
    },
    {
      question: 'Either it will rain or it will snow. It is not snowing. Therefore:',
      options: ['It is not raining', 'It might rain', 'It is raining', 'It will snow later'],
      correct: 2,
    },
    {
      question: 'All students in the class passed. Tom is in the class. Therefore:',
      options: ['Tom might have passed', 'Tom failed', 'Tom passed', 'Tom is not a student'],
      correct: 2,
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

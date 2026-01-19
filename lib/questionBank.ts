// Question Bank - 5 questions for each category
export interface Question {
  question: string;
  options: string[];
  correct: number;
  category: 'numerical' | 'verbal' | 'inductive' | 'deductive';
}

export const questionBank = {
  numerical: [
    {
      question: 'Jake completed 1/2 of a task before going on vacation. Victor took over and manage to complete 25% of the remaining task. How much of the task is still pending?',
      options: ['12.5%', '25%', '37.5%', '75%'],
      correct: 2,
      category: 'numerical' as const,
    },
    {
      question: 'A wireless phone company has two pricing plans. Plan A costs $50/month for unlimited talk. Plan B costs $30/month for 400 minutes and $0.10 for each additional minute. If a consumer averages 675 minutes per month, what would be the difference in cost between the two pricing plans?',
      options: ['Plan A would cost $10 more/month', 'Plan A would cost $4.50 more/month', 'Plan B would cost $5.25 more/month', 'Plan B would cost $7.50 more/month'],
      correct: 3,
      category: 'numerical' as const,
    },
    {
      question: 'A group of four numbers has an average (arithmetic mean) of 30. The first three numbers are 32, 26, and 24. What is the other number?',
      options: ['30', '33', '38', '48'],
      correct: 2,
      category: 'numerical' as const,
    },
    {
      question: 'Which of the following is the smallest value?',
      options: ['0.709', '1.079', '0.097', '0.907'],
      correct: 2,
      category: 'numerical' as const,
    },
    {
      question: 'A family drives 300 miles on a road trip. They take a longer route to avoid traffic on their return trip, traveling 45% further. How many miles did the family drive during their return trip?',
      options: ['405', '415', '425', '435'],
      correct: 3,
      category: 'numerical' as const,
    },
  ],
  verbal: [
    {
      question: 'I. Obesity has reached epidemic proportions in the US due to unhealthy diets.\nII. Good rainfall has resulted in a high yield of corn in the US over the last decade.',
      options: ['I is the cause and II is its effect', 'II is the cause and I is its effect', 'I and II are independent statements', 'Both I and II are effects of some common cause'],
      correct: 2,
      category: 'verbal' as const,
    },
    {
      question: 'I. A degree from an accredited college often leads to better educational and professional outcomes than a degree from an unaccredited college.\nII. More students seek admission to accredited colleges than unaccredited colleges.',
      options: ['I is the cause and II is its effect', 'II is the cause and I is its effect', 'I and II are independent statements', 'Both I and II are effects of some common cause'],
      correct: 0,
      category: 'verbal' as const,
    },
    {
      question: 'I. Using the wrong kind of wire in a home renovation can result in an electrical fire.\nII. It is always recommended to use a certified electrician and follow building codes.',
      options: ['I is the cause and II is its effect', 'II is the cause and I is its effect', 'I and II are independent statements', 'Both I and II are effects of some common cause'],
      correct: 0,
      category: 'verbal' as const,
    },
    {
      question: 'Statements: Fossils are a treasure trove for scientific study into prehistoric times. Some plant and animal remains, possibly stuck in thick mud millions of years ago, solidified into stones with different degrees of preservation depending on the acidity of the soil, weather conditions, tectonic activities etc. Fossilization has preserved a huge variety of pre-historic life, ranging from the shells of small crustaceans to gigantic dinosaur skeletons.\n\nInference: Not everything that got stuck in mud in prehistoric times turned into fossils.',
      options: ['True', 'False', 'Probably True', 'Probably False'],
      correct: 2,
      category: 'verbal' as const,
    },
    {
      question: 'Statements: Poachers have been known to blatantly violate the boundaries of Africa\'s natural game reserves. The most valuable catch is the tusk of a bull elephant, which fetches a high price in the international ivory black market. Often, skinned carcasses of lions are found, as are rhinos that have been shot dead by high-caliber rifles and left with their horns cut off. Illegal trade in animal body parts is flourishing.\n\nInference: The security of African game reserves is inadequately staffed and largely ineffective.',
      options: ['True', 'False', 'Probably True', 'Probably False'],
      correct: 0,
      category: 'verbal' as const,
    },
  ],
  inductive: [
    {
      question: 'What would be the next number in the following series: 2 ... 5 ... 7 ... 12 ... 19 ... ?',
      options: ['29', '31', '33', '37', '39'],
      correct: 1,
      category: 'inductive' as const,
    },
    {
      question: 'What is the missing number in the following sequence: 1, 8, 22, 43, ?, 106 ?',
      options: ['61', '71', '85', '97'],
      correct: 1,
      category: 'inductive' as const,
    },
    {
      question: 'What would be the next group of letters in the following series: exkf ... fwke ... gvkd ... hukc ... ?',
      options: ['gukb', 'itkd', 'itkb', 'jtkb', 'ivkd'],
      correct: 2,
      category: 'inductive' as const,
    },
    {
      question: 'What is the next number in the following sequence: 26, 37, 50, ?',
      options: ['62', '65', '70', '71'],
      correct: 1,
      category: 'inductive' as const,
    },
    {
      question: 'What is the next number in the following sequence: 6, 12, 20, ?',
      options: ['24', '28', '30', '38'],
      correct: 2,
      category: 'inductive' as const,
    },
  ],
  deductive: [
    {
      question: 'Statements:\nAll swimmers are athletes.\nSome stars are swimmers.\n\nConclusion:\nI. Some athletes are stars.\nII. Some athletes are swimmers.',
      options: ['Only I follows', 'Both I and II follow', 'Only II follows', 'Neither I nor II follows'],
      correct: 1,
      category: 'deductive' as const,
    },
    {
      question: 'Statements:\nAll auditors are accountants.\nSome cashiers are accountants.\nAll accountants are CFOs.\n\nConclusion:\nI. All CFOs are auditors.\nII. All accountants are auditors.\nIII. Some auditors are cashiers.\nIV. Some accountants are cashiers.',
      options: ['Only I follows', 'Only II follows', 'Only III follows', 'Only IV follows'],
      correct: 3,
      category: 'deductive' as const,
    },
    {
      question: 'Statements:\nAll monkeys are apes.\nAll apes are primates.\n\nConclusion:\nI. Some primates are apes.\nII. Some primates are monkeys.',
      options: ['Only I follows', 'Both I and II follow', 'Only II follows', 'Neither I nor II follows'],
      correct: 1,
      category: 'deductive' as const,
    },
    {
      question: 'In a conference of eight, Ally, Beatrice, Chloe, Dorothy, Eleanore, Flora, Grace, and Hannah are sitting around a circular table facing towards the center.\n\n- Beatrice is seated immediately to the left of Flora.\n- Chloe is sitting between Eleanore and Flora.\n- Eleanore is sitting next to Grace but not to Hannah.\n- Hannah is not sitting next to Dorothy but is seated immediately to the left of Ally.\n\nWho is sitting between Hannah and Eleanore?',
      options: ['Ally', 'Flora', 'Beatrice', 'Grace'],
      correct: 3,
      category: 'deductive' as const,
    },
    {
      question: 'Software Update Information:\n\n- Katarina: must be immediately after Paco\n- Melody: cannot be before Paco\n- Ollie: must be first\n- Lewis: exactly one computer must be updated between Lewis\'s and Katarina\'s\n- Ningning: must be after Lewis\n- Paco: must be before Lewis\n\nWho is the last to be updated?',
      options: ['Ningning', 'Lewis', 'Melody', 'Ollie'],
      correct: 0,
      category: 'deductive' as const,
    },
  ],
};

// Get random questions from a category using Fisher-Yates shuffle
export function getRandomQuestions(category: Question[], count: number): Question[] {
  const shuffled = [...category];
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Get questions for combined test (2 from each category)
export function getCombinedTestQuestions(): Question[] {
  return [
    ...getRandomQuestions(questionBank.numerical, 2),
    ...getRandomQuestions(questionBank.verbal, 2),
    ...getRandomQuestions(questionBank.inductive, 2),
    ...getRandomQuestions(questionBank.deductive, 2),
  ];
}

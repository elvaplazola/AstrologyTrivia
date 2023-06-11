// DOM
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#scoreText');
const progressBarTracker = document.querySelector('#progressBarTracker');

// Game variables
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;
const MAX_PROGRESS_WIDTH = 0;

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Astrology Questions
const questions = [
    {
        question: 'How many Zodiac signs are there?',
        answers: [
            { text: '15', correct: false },
            { text: '11', correct: false },
            { text: '10', correct: false },
            { text: '12', correct: true },
        ]
    },
    {
        question: 'What element is the sign of Aries?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Air', correct: false },
            { text: 'Fire', correct: true },
            { text: 'Water', correct: false },
        ]
    },
    {
        question:'What element is the sign of Cancer?',
        answers: [
            {text: 'Earth', correct: false},
            {text: 'Air', correct: false},
            {text: 'Fire', correct: false},
            {text: 'Water', correct: true},
        ]
    },
    {
        question:'What is the most common Zodiac sign in the US?',
        answers: [
            {text: 'Virgo', correct: false},
            {text: 'Libra', correct: false},
            {text: 'Gemini', correct: false},
            {text: 'Scorpio', correct: true},
        ]
    },
    {
        question:'What is the least common Zodiac sign in the US?',
        answers: [
            {text: 'Sagittarius', correct: false},
            {text: 'Aquarius', correct: true},
            {text: 'Leo', correct: false},
            {text: 'Taurus', correct: false},
        ]
    },
    {
        question:'How many planets rule the twelve Zodiac signs?',
        answers: [
            {text: '9', correct: true},
            {text: '7', correct: false},
            {text: '6', correct: false},
            {text: '10', correct: false},
        ]
    },
    {
        question:'What are the only planets to rule over one Zodiac sign?',
        answers: [
            {text: 'Mercury and Jupiter', correct: false},
            {text: 'Venus and Sun', correct: false},
            {text: 'Saturn and Mars', correct: false},
            {text: 'Sun and Moon', correct: true},
        ]
    },
    {
        question:'What are the most common star signs among NFL All-Stars?',
        answers: [
            {text: 'Libra and Aries', correct: false},
            {text: 'Sagittarius and Virgo', correct: false},
            {text: 'Leo and Aries', correct: true},
            {text: 'Gemini and Cancer', correct: false},
        ]
    },
    {
        question:'What is the most common star sign among billionaires?',
        answers: [
            {text: 'Virgo', correct: false},
            {text: 'Libra', correct: true},
            {text: 'Taurus', correct: false},
            {text: 'Leo', correct: false},
        ]
    },
    {
        question:'What star sign is Bill Gates?',
        answers: [
            {text: 'Cancer', correct: false},
            {text: 'Pisces', correct: false},
            {text: 'Capricorn', correct: false},
            {text: 'Scorpio', correct: true},
        ]
    },
];


// Start the game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
// Generate a new question
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        endGame();
        return;
    }

    questionCounter++;
    progressText.innerText = 'Question ${questionCounter}/${MAX_QUESTIONS}';
    progressBarTracker.style.width = '${(questionCounter / MAX_QUESTIONS) * 100}%';

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion.answers[index].text;
    });

    availableQuestions.splice(questionIndex, 1);
// update progress bar width
    trackerWidth += (MAX_PROGRESS_WIDTH/MAX_QUESTIONS);
    updateProgressBar();
}

//selecting answer

let canAnswer = true; 

choices.forEach((choice, index) => {
    choice.addEventListener('click', () => {
        if (!canAnswer) return;
        
        canAnswer = false;

        const selectedAnswer = choice;
        const selectedText = selectedAnswer.innerText;
        const correctAnswer = currentQuestion.answers[index].correct;

        if (correctAnswer) {
            selectedAnswer.classList.add('correct');
            incrementScore();
        } else {
            selectedAnswer.classList.add('incorrect');
        }


 // Wait for 1 second before going to the next question
 setTimeout(() => {
    selectedAnswer.classList.remove('correct', 'incorrect');
    getNewQuestion();
    canAnswer = true;
}, 1000);
});
});


// Increase the score
function incrementScore(points) {
    score += SCORE_POINTS;
}

//end of game & hide Score 
function endGame() {
    question.style.display = 'none';
    choices.forEach(choice => {
        choice.style.display = 'none';
    });

    const scoreDisplay = document.createElement('div');
    scoreDisplay.innerText = 'Congratulations, you are finished! Your score:' + score;
    scoreText.innerText = '';
   scoreText.appendChild(scoreDisplay);
}

// Start the game when the page loads
startGame();
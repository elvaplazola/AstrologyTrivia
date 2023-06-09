// Declare Variables

let questionElement = document.getElementById("question")
let answerElement =document.getElementById("answers")
let nextElement =document.getElementById("next-btn")

// set constants
const SCORE_POINTS = 10
const MAX_QUESTIONS = 4

// Input Questions

let questions = [
    {
        question:'How many Zodiac signs are there?',
        choice1: '15',
        choice2: '11',
        choice3: '10',
        choice4: '12',
        answer: 12, 
    }
    {
        question:'What element is the sign of Aries?',
        choice1: 'Earth',
        choice2: 'Air',
        choice3: 'Fire',
        choice4: 'Water',
        answer: Fire, 
    }
    {
        question:'What element is the sign of Cancer?',
        choice1: 'Earth',
        choice2: 'Air',
        choice3: 'Fire',
        choice4: 'Water',
        answer: Water, 
    }
    {
        question:'What is the most common Zodiac sign in the US?',
        choice1: 'Virgo',
        choice2: 'Libra',
        choice3: 'Gemini',
        choice4: 'Scorpio',
        answer: Scorpio with an estimated 9.6% US population,
    }
    {
        question:'What is the least common Zodiac sign in the US?',
        choice1: 'Sagittarius',
        choice2: 'Aquarius',
        choice3: 'Leo',
        choice4: 'Taurus',
        answer: Aquarius with an estimated 6.3% US population,
    }
    {
        question:'How many planets rule the twelve Zodiac signs?',
        choice1: '9',
        choice2: '7',
        choice3: '6',
        choice4: '10',
        answer: 9, 
    }
    {
        question:'What are the only planets to rule over one Zodiac sign?',
        choice1: 'Mercury and Jupiter',
        choice2: 'Venus and Sun',
        choice3: 'Saturn and Mars',
        choice4: 'Sun and Moon',
        answer: Sun and Moon, 
    }
    {
        question:'What are the most common star signs among NFL All-Stars?',
        choice1: 'Libra and Aries',
        choice2: 'Sagittarius and Virgo',
        choice3: 'Leo and Aries',
        choice4: 'Gemini and Cancer',
        answer: Leo and Aries, 
    }
    {
        question:'What is the most common star sign among billionaires?',
        choice1: 'Virgo',
        choice2: 'Libra',
        choice3: 'Taurus',
        choice4: 'Leo',
        answer: Libra with 32 billionaires under this sign, 
    }
    {
        question:'What star sign Bill Gates?',
        choice1: 'Cancer,',
        choice2: 'Aries',
        choice3: 'Pisces',
        choice4: 'Scorpio',
        answer: Scorpio, 
    }
]
// set initial score
let currentQuestionIndex = 0
let score = 0

// initialize game
function startGame () {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion = ()
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
}
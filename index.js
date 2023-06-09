// Declare Variables
// referred to following YT video - https://www.youtube.com/watch?v=f4fB9Xg2JEY
let questionElement = document.getElementById("question")
let answerElement =document.getElementById("answers")
let nextButton =document.getElementById("next-btn")

// Input Questions

let questions = [
    {
        question:'How many Zodiac signs are there?',
        answers: [
            {text: "15", correct: false };
            {text: "11", correct: false };
            {text: "10", correct: false };
            {text: "12", correct: true };
        ]
    }
    {
        question:'What element is the sign of Aries?',
        answers: [
            {text: "Earth", correct: false };
            {text: "Air", correct: false };
            {text: "Fire", correct: true };
            {text: "Water", correct: false };
        ]
    }
    {
        question:'What element is the sign of Cancer?',
        answers: [
            {text: "Earth", correct: false };
            {text: "Air", correct: false };
            {text: "Fire", correct: false };
            {text: "Water", correct: true };
        ]
    }
    {
        question:'What is the most common Zodiac sign in the US?',
        answers: [
            {text: "Virgo", correct: false };
            {text: "Libra", correct: false };
            {text: "Gemini", correct: false };
            {text: "Scorpio", correct: true };
        ]
    }
    {
        question:'What is the least common Zodiac sign in the US?',
        answers: [
            {text: "Sagittarius", correct: false };
            {text: "Taurus", correct: false };
            {text: "Aquarius", correct: true };
            {text: "Leo", correct: false };
        ]
    }
    {
        question:'How many planets rule the twelve Zodiac signs?',
        answers: [
            {text: "9", correct: true };
            {text: "7", correct: false };
            {text: "6", correct: false };
            {text: "10", correct: false };
        ]
    }
    {
        question:'What are the only planets to rule over one Zodiac sign?',
        answers: [
            {text: "Mercury and Jupiter", correct: false };
            {text: "Venus and Sun", correct: false };
            {text: "Saturn and Mars", correct: false };
            {text: "Sun and Moon", correct: true };
        ]
    }

    {
        question:'What are the most common star signs among NFL All-Stars?',
        answers: [
            {text: "Libra and Aries", correct: false };
            {text: "Sagittarius and Virgo", correct: false };
            {text: "Leo and Aries", correct: true };
            {text: "Gemini and Cancer", correct: false };
        ]
    }
    {
        question:'What is the most common star sign among billionaires?',
        answers: [
            {text: "Virgo", correct: false };
            {text: "Libra", correct: true };
            {text: "Taurus", correct: false};
            {text: "Leo", correct: false };
        ]
    }
    {
        question:'What star sign is Bill Gates?',
        answers: [
            {text: "Cancer", correct: false };
            {text: "Aries", correct: false };
            {text: "Pisces", correct: false};
            {text: "Scorpio", correct: true };
        ]
    }
]
    
// set initial score
let currentQuestionIndex = 0
let score = 0

// initialize game
function startGame () {
    questionCounter = 0
    score = 0
    nextElement.innerHTML= "Next";
    getNewQuestion();
}
// Added callback function to retrieve new question
// referred to website - https://www.programiz.com/javascript/callback
function getNewQuestion () {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionnmbr=currentQuestionIndex + 1;
    questionElement.innerHTML = questionnmbr + ". " + currentQuestion.question;
}
// click event used to for each button
currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    answerElement.appendChild(button);
  });


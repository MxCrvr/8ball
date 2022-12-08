"use strict"

const userInput = document.getElementById('user-input');
const hint = document.getElementById('hint');
const eightDigit = document.getElementById('eight-digit');
const eightBall = document.getElementById('eight-ball');
const ledAnswer = document.getElementById('led-answer');
const answer = document.getElementById('answer-text');

function showHint() {
    userInput.addEventListener('keyup', () => {
        hint.style.display = 'block';
    });
};

function removeHint() {
    eightBall.addEventListener('click', () => {
        hint.style.display = 'none';
    });

    eightDigit.addEventListener('click', () => {
        hint.style.display = 'block';
    })
};

showHint();
removeHint();

function randomAnswer() {
    const eightBallAnswers = [
        "Umm, no",
        "Definitely not",
        "Of course",
        "Almost definitely",
        "My sources say that is correct",
        "I'm just a ball, I don't know that man",
        "That doesn't matter",
        "Absolutely",
        "It's a no from me",
        "Without a doubt",
        "Reply is hazy, try again",
        "Super doubtful",
        "Outlook not good",
        "Ask again later",
        "Most likely, but maybe not",
        "Certainly",
    ]
    
    const random = eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)];

    return random;
};

eightBall.addEventListener('click', () => {
    if (userInput.value === '') {
        hint.style.display = 'block';
        hint.innerText = 'You need to ask a question';
        userInput.focus();

        if (userInput !== '') {
            userInput.addEventListener('keyup', () => {
                hint.innerText = 'Click the 8ball to get your answer';
            });
        };
    } else {
        ledAnswer.style.display = 'block';
        eightDigit.style.fontSize = '5rem';
        eightBall.style.justifyContent = 'flex-start';
        answer.innerText = randomAnswer();
        const h1 = document.getElementById('h1');
        h1.innerText = "Ask another question...";
    };
});


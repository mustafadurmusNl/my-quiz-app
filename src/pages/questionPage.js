import { ANSWERS_LIST_ID, NEXT_QUESTION_BUTTON_ID, USER_INTERFACE_ID, SKIP_QUESTION_BUTTON_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initEndingPage } from './endingPage.js';

let questionAnswered = false;
export let score = 0;

export const initQuestionPage = index => {
    const storagedScore = localStorage.getItem('score');
    score = storagedScore ? Number(storagedScore) : 0;

    if (index !== undefined) {
        quizData.currentQuestionIndex = index;
    }

    if (quizData.currentQuestionIndex >= quizData.questions.length) {
        initEndingPage();
        return;
    }

    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
 

    

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

    const indexContainer = createIndexContainer();
    userInterface.appendChild(indexContainer);

    const questionElement = createQuestionElement(currentQuestion.text);
    userInterface.appendChild(questionElement);

    const scoreContainer = createScoreContainer();
    userInterface.appendChild(scoreContainer);
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
    answersListElement.innerHTML = ''; // Clear previous answers

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
        const answerElement = createAnswerElement(key, answerText);
        answerElement.addEventListener('click', () => selectAnswer(key, answerElement));
        answersListElement.appendChild(answerElement);
    }
    
    document.getElementById(NEXT_QUESTION_BUTTON_ID).addEventListener('click', nextQuestion);

    document.getElementById(SKIP_QUESTION_BUTTON_ID).addEventListener('click', skipQuestion);

    questionAnswered = false;
    nextButtonSwitcher();
};

const skipQuestion = () => {
    if (questionAnswered) return;

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
    const allAnswers = answersListElement.getElementsByTagName('li');
    for (let i = 0; i < allAnswers.length; i++) {
        const answerKey = allAnswers[i].getAttribute('data-key');
        if (answerKey === currentQuestion.correct) {
            allAnswers[i].classList.add('skipped-correct');
            break;
        }
    }

    questionAnswered = true;
    nextButtonSwitcher();
    skipButtonSwitcher();
};

const selectAnswer = (key, answerElement) => {
    if (questionAnswered) return;

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
    const allAnswers = answersListElement.getElementsByTagName('li');

    if (key === currentQuestion.correct) {
        answerElement.style.backgroundColor = 'green';
        score++;
        updateScoreDisplay()
        displayHappyCat();
    } else {
        answerElement.style.backgroundColor = 'red';
        displayUnhappyCat();
        setTimeout(() => {
            for (let i = 0; i < allAnswers.length; i++) {
                const answerKey = allAnswers[i].getAttribute('data-key');
                if (answerKey === currentQuestion.correct) {
                    allAnswers[i].style.backgroundColor = 'green';
                    break;
                }
            }
        }, 500);
    }

    questionAnswered = true;
    skipButtonSwitcher();
    nextButtonSwitcher();
};

const nextQuestion = () => {
    
    quizData.currentQuestionIndex++;
    localStorage.setItem('questionIndex', quizData.currentQuestionIndex);
    localStorage.setItem('score', score);

    initQuestionPage(quizData.currentQuestionIndex);
    removeCat()
};

const nextButtonSwitcher = () => {
    document.getElementById(NEXT_QUESTION_BUTTON_ID).disabled = !questionAnswered;
};

const skipButtonSwitcher = () => {
    const skipButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
    skipButton.disabled = questionAnswered;
};

const displayHappyCat = () => {
    const happyCatImg = document.createElement('img');
    happyCatImg.src = 'https://media.tenor.com/cS2O4bhrjLkAAAAM/happy-pleased.gif';
    happyCatImg.alt = 'Happy Cat';
    happyCatImg.classList.add('show-happy-cat');
    document.body.appendChild(happyCatImg);

    setTimeout(() => {
        happyCatImg.remove();
    }, 3000);
};

const displayUnhappyCat = () => {
    const unhappyCatImg = document.createElement('img');
    unhappyCatImg.src = 'https://media.tenor.com/xCO75gIMoCoAAAAM/catsad-sad.gif';
    unhappyCatImg.alt = 'Unhappy Cat';
    unhappyCatImg.classList.add('show-unhappy-cat');
    document.body.appendChild(unhappyCatImg);

    setTimeout(() => {
        unhappyCatImg.remove();
    }, 3000);
};
const createScoreContainer = () => {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');

    const scoreElement = document.createElement('div');
    scoreElement.classList.add('score');
    scoreElement.textContent = `Your Score is: ${score}`;
    scoreContainer.appendChild(scoreElement);
    return scoreContainer;
};
const createIndexContainer = () => {
    const indexContainer = document.createElement('div');
    indexContainer.classList.add('indexContainer');
    const questionElements = document.createElement('div');
    questionElements.classList.add('index');
    questionElements.textContent = ` Question : ${quizData.currentQuestionIndex + 1}`;
    indexContainer.appendChild(questionElements);
    return indexContainer;
};
const updateScoreDisplay = () => {
    const scoreElement = document.querySelector('.score');
    if (scoreElement) {
        scoreElement.textContent = `Your Score is: ${score}`;
        scoreElement.classList.add('score-enlarged');
        setTimeout(() => {
            scoreElement.classList.remove('score-enlarged');
        }, 1000); // Duration should match the CSS transition duration
    }
};
const removeCat = () => {
    const happyCatImg = document.querySelector('.show-happy-cat');
    const unHappyCatImg = document.querySelector('.show-unhappy-cat');
    
    if (happyCatImg|| unHappyCatImg) {
        happyCatImg.remove();
        unHappyCatImg.remove()
    }
};

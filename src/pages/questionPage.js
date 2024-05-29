import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { processAnswer } from '../quiz.js';
import { initEndingPage } from './endingPage.js';

export const initQuestionPage = () => {
  const currentQuestionIndex = quizData.currentQuestionIndex;
  if (currentQuestionIndex >= quizData.questions.length) {
      initEndingPage();
      return;
  }
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);


  const answerButtons = document.querySelectorAll(ANSWERS_LIST_ID);
  answerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const isCorrect = checkAnswer(index);
      processAnswer(isCorrect);
    });
  });

  const checkAnswer = (index) => {
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const selectedAnswer = Object.keys(currentQuestion.answers)[index];
    correctAnswer = currentQuestion.correct;
    return selectedAnswer === correctAnswer;
  };
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

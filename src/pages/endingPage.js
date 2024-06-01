import { NEW_GAME_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { resetQuiz } from '../quiz.js';
import { createEndingElement } from '../views/endingView.js';
import { quizData } from '../data.js';

export const initEndingPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const endingElement = createEndingElement(quizData.questions.length);
  userInterface.appendChild(endingElement);

  document
    .getElementById(NEW_GAME_BUTTON_ID)
    .addEventListener('click', resetQuiz);
};

import { ANSWERS_LIST_ID, NEW_GAME_BUTTON_ID, USER_INTERFACE_ID } from './constants.js';
import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';




const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  quizData.score=0;
  initWelcomePage();

};
window.addEventListener('load', loadApp);

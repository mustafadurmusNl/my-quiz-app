import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  CONFIRM_BUTTON,
  INPUT_NAME,
  INPUT_P_TAG,
  WELCOME_MESSAGE,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  const confirmButton = document.getElementById(CONFIRM_BUTTON);
  const startButton = document.getElementById(START_QUIZ_BUTTON_ID);
  const nameInput = document.getElementById(INPUT_NAME);
  const namePrompt = document.getElementById(INPUT_P_TAG);
  const welcomeMessage = document.getElementById(WELCOME_MESSAGE);

  function updateButtonState() {
    const name = nameInput.value.trim();
    if (name) {
      confirmButton.classList.remove('button-disabled');
      confirmButton.classList.add('button-enabled');
      confirmButton.disabled = false;
      confirmButton.style.backgroundColor = 'rgb(128,204,66)';
      confirmButton.style.cursor = 'pointer';
    } else {
      confirmButton.classList.add('button-disabled');
      confirmButton.classList.remove('button-enabled');
      confirmButton.disabled = true;
      confirmButton.style.backgroundColor = 'rgb(232,232,232)';
      confirmButton.style.cursor = 'not-allowed';
    }
  }

  updateButtonState();

  nameInput.addEventListener('input', updateButtonState);

  confirmButton.addEventListener('click', () => {
    const playerName = nameInput.value.trim();
    if (playerName) {
      welcomeMessage.innerText = `Welcome, ${playerName}`;
      welcomeMessage.classList.add('welcome-effect');
      welcomeMessage.style.padding = '20px';
      setTimeout(() => {
        welcomeMessage.style.opacity = 1;
        welcomeMessage.classList.add('green-text');
      }, 100);
      confirmButton.style.display = 'none';
      startButton.style.display = 'block';
      nameInput.style.display = 'none';
      namePrompt.style.display = 'none';
    }
  });

  startButton.addEventListener('click', startQuiz);
};
const startQuiz = () => {
  console.log('Starting the game...');
  initQuestionPage();
};

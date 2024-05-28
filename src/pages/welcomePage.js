import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
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

    // we need add text in the input and when clicked confirm button can see user name and can start the quiz
    // Also we need confirm btn and player name and welcome message 
    const confirmButton = document.getElementById('confirm-button');
    const startButton = document.getElementById(START_QUIZ_BUTTON_ID);
    const nameInput = document.getElementById('player-name-input');
    const namePrompt = document.getElementById('name-prompt');
    const welcomeMessage = document.getElementById('welcome-message');
  
    nameInput.addEventListener('input', () => {
      const name = nameInput.value.trim();
      confirmButton.style.display = name ? 'block' : 'none'; // Show confirm button when we have something is input 
    });

    confirmButton.addEventListener('click', () => {
      const playerName = nameInput.value.trim();
      if (playerName) {
        welcomeMessage.innerText = `Welcome, ${playerName}`;
        confirmButton.style.display = 'none'; // Hide confirm button
        startButton.style.display = 'block'; //and  Show start game button
        nameInput.style.display = 'none'; // Hide the input field
        namePrompt.style.display = 'none'; // Hide the <p> tag
      }
    });

    startButton.addEventListener('click', () => startQuiz());
};
const startQuiz = () => {
  console.log('Starting the game...');
  initQuestionPage();
};




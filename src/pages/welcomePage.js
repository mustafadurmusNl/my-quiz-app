import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID , CONFIRM_BUTTON ,INPUT_NAME , INPUT_P_TAG , WELCOME_MESSAGE  } from '../constants.js';
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
    const confirmButton = document.getElementById(CONFIRM_BUTTON);
    const startButton = document.getElementById(START_QUIZ_BUTTON_ID);
    const nameInput = document.getElementById(INPUT_NAME);
    const namePrompt = document.getElementById(INPUT_P_TAG);
    const welcomeMessage = document.getElementById(WELCOME_MESSAGE);
  
    nameInput.addEventListener('input', () => {
      // remove spaces from the beginning as the user types
      if (nameInput.value.startsWith(' ')) {
        nameInput.value = nameInput.value.trimStart();
      }
      const name = name-Input.value;
      confirmButton.style.display = name ? 'block' : 'none';
    });

    confirmButton.addEventListener('click', () => {
      const playerName = nameInput.value;
      if (playerName) {
        welcomeMessage.innerText = `Welcome , ${playerName}`;
        welcomeMessage.classList.add('welcome-effect'); 
        welcomeMessage.style.padding='20px';
        setTimeout(() => {
          welcomeMessage.style.opacity = 1; 
          welcomeMessage.classList.add('green-text'); // Change the color to green
        }, 100);
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




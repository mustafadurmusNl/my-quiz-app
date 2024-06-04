import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID, CONFIRM_BUTTON_ID, INPUT_NAME_ID, INPUT_P_TAG_ID, WELCOME_MESSAGE_ID, CONTINUE_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const welcomeElement = createWelcomeElement();
    userInterface.appendChild(welcomeElement);

    document.getElementById(START_QUIZ_BUTTON_ID).addEventListener('click', startQuiz);
    const confirmButton = document.getElementById(CONFIRM_BUTTON_ID);
    const continueButton = document.getElementById(CONTINUE_BUTTON_ID);
    const startButton = document.getElementById(START_QUIZ_BUTTON_ID);
    const nameInput = document.getElementById(INPUT_NAME_ID);
    const namePrompt = document.getElementById(INPUT_P_TAG_ID);

    function updateConfirmButtonState() {
        nameInput.value = nameInput.value.trimStart();
        const name = nameInput.value;
        if (name) {
            enableConfirmButton();
        } else {
            disableConfirmButton();
        }
    }

    function updateContinueButtonState() {
        const storagedPlayerName = localStorage.getItem('playerName');
        if (storagedPlayerName) {
            enableContinueButton();
        } else {
            disableContinueButton();
        }
    }

    updateConfirmButtonState();
    nameInput.addEventListener('input', updateConfirmButtonState);

    updateContinueButtonState();

    confirmButton.addEventListener('click', () => {
        const playerName = nameInput.value.trim();
        const storagedPlayerName = localStorage.getItem('playerName');
        if (playerName) {
            if (playerName === storagedPlayerName) {
                const storagedQuestionIndex = localStorage.getItem('questionIndex');
                console.log('storagedQuestionIndex', storagedQuestionIndex);
                if (storagedQuestionIndex) {
                    initQuestionPage(Number(storagedQuestionIndex));
                } else {
                    initQuestionPage();
                }
            } else {
                localStorage.setItem('score', 0);
                localStorage.setItem('playerName', playerName);
                createWelcomeMessage(playerName);
                confirmButton.style.display = 'none';
                continueButton.style.display = 'none';
                startButton.style.display = 'block';
                nameInput.style.display = 'none';
                namePrompt.style.display = 'none';
            }
        }
    });

    continueButton.addEventListener('click', () => {
        const storagedQuestionIndex = localStorage.getItem('questionIndex');
        if (storagedQuestionIndex) {
            initQuestionPage(Number(storagedQuestionIndex));
        } else {
            initQuestionPage();
        }
    });

    startButton.addEventListener('click', startQuiz);
};

const startQuiz = () => {
    initQuestionPage();
};
const enableConfirmButton = () => {
    const confirmButton = document.getElementById(CONFIRM_BUTTON_ID);
    confirmButton.classList.remove('button-disabled');
    confirmButton.classList.add('button-enabled');
    confirmButton.disabled = false;
    confirmButton.style.backgroundColor = 'rgb(221, 113, 162)';
    confirmButton.style.cursor = 'pointer';
};
const disableConfirmButton = () => {
    const confirmButton = document.getElementById(CONFIRM_BUTTON_ID);
    confirmButton.classList.remove('button-disabled');
    confirmButton.classList.add('button-enabled');
    confirmButton.disabled = true;
    confirmButton.style.backgroundColor = 'rgb(221, 113, 162)';
    confirmButton.style.cursor = 'pointer';
};
const enableContinueButton = () => {
    const continueButton = document.getElementById(CONTINUE_BUTTON_ID);
    continueButton.classList.remove('button-disabled');
    continueButton.classList.add('button-enabled');
    continueButton.disabled = false;
    continueButton.style.backgroundColor = 'rgb(221, 113, 162)';
    continueButton.style.cursor = 'pointer';
};
const disableContinueButton = () => {
    const continueButton = document.getElementById(CONTINUE_BUTTON_ID);
    continueButton.classList.remove('button-disabled');
    continueButton.classList.add('button-enabled');
    continueButton.disabled = true;
    continueButton.style.backgroundColor = 'rgb(221, 113, 162)';
    continueButton.style.cursor = 'pointer';
};
const createWelcomeMessage = playerName => {
    const welcomeMessage = document.getElementById(WELCOME_MESSAGE_ID);
    welcomeMessage.innerText = `Welcome , ${playerName}`;
    welcomeMessage.classList.add('welcome-effect');
    welcomeMessage.style.padding = '20px';
    setTimeout(() => {
        welcomeMessage.style.opacity = 1;
        welcomeMessage.classList.add('green-text');
    }, 2000);
};

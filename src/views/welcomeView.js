import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  // create p tag and input field and confirm button
  const element = document.createElement('div');
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.justifyContent = 'center';
  element.style.height = '90vh';

  element.innerHTML = String.raw`
  <h1 id="welcome-message"  >Welcome</h1>
  <p id="name-prompt" >What name do you like to play?</p>
  <input type="text" id="player-name-input" style="text-align: left; "  placeholder="Enter your name" />
  <div style="display:flex; align-items:center;gap:10px"><button id="confirm-button" style="display: block; ">Confirm</button>
  <button id="continue-button" style="display: block; ">Continue</button></div>
  <button id="${START_QUIZ_BUTTON_ID}" class='start-quiz-button' style="display: none;">Start quiz</button>
  `;

  return element;
};

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  // create p tag and input field and confirm button 
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <h1 id="welcome-message">Welcome</h1>
  <p id="name-prompt">What name do you like to play?</p>
  <input type="text" id="player-name-input" placeholder="Enter your name" />
  <button id="confirm-button" style="display: block;">Confirm</button>
  <button id="${START_QUIZ_BUTTON_ID}" style="display: none;">Start quiz</button>
  `;
  return element;
};

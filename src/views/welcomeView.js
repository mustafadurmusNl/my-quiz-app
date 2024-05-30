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

  <video autoplay muted loop id="myVideo" style="height: 100%; ">
  <source src="./public/images-videos/q1.mp4" type="video/mp4">
  </video>
  <h1 id="welcome-message"  >Welcome</h1>
  <p id="name-prompt" >What name do you like to play?</p>
  <input type="text" id="player-name-input"  placeholder="Enter your name" />
  <button id="confirm-button" style="display: block; ">Confirm</button>
  <button id="${START_QUIZ_BUTTON_ID}" style="display: none;">Start quiz</button>
  `;

  return element;
};

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const li = document.createElement('li');
  li.setAttribute('data-key', key); // Set the data-key attribute to the key parameter
  li.textContent = answerText;
  return li;
};

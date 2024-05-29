import { NEW_GAME_BUTTON_ID } from "../constants.js"
export const createEndingElement=(score,numOfQuestions)=>{
    const element=document.createElement('div')
    element.className='ending-page'
   const scoreElement=document.createElement('p')
   scoreElement.textContent=`your final score is ${score}out of ${numOfQuestions}`
   element.appendChild(scoreElement)
   const newGameButton=document.createElement('button')
   newGameButton.id=NEW_GAME_BUTTON_ID;
   newGameButton.textContent='New Game'
   element.appendChild(newGameButton)
return element
}



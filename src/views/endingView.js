import { NEW_GAME_BUTTON_ID } from "../constants"
import{quizData}from '../data'

export const createEndingElement=()=>{
    const element=document.createElement('div')
    element.className='ending-page'
   const score=document.createElement('p')
   score.textContent=`your final score is ${quizData.score}`
   element.appendChild(score)
   const newGameButton=document.createElement('button')
   newGameButton.id=NEW_GAME_BUTTON_ID;
   newGameButton.textContent='New Game'
   element.appendChild(newGameButton)
return element
}
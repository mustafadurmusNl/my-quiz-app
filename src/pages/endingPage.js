import { NEW_GAME_BUTTON_ID, USER_INTERFACE_ID } from "../constants"
import { resetQuiz } from "../quiz";
import{createEndingElement}from '../views/endingView'
import { resetQuiz } from "../quiz";

export const initEndingPage=()=>{
   const userInterface=document.getElementById(USER_INTERFACE_ID)
   userInterface.innerHTML='';
   const endingElement=createEndingElement()
   userInterface.appendChild(endingElement)
document.getElementById(NEW_GAME_BUTTON_ID).addEventListener('click',resetQuiz)

} 
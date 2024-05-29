import { NEW_GAME_BUTTON_ID,SAD_CAT_IMAGE,HAPPY_CAT_IMAGE,SUPER_HAPPY_CAT_IMAGE } from "../constants.js"
export const createEndingElement=(score,numOfQuestions)=>{
    const element=document.createElement('div')
    element.className='ending-page'
   const scoreElement=document.createElement('p')
   scoreElement.textContent=`your final score is ${score} out of ${numOfQuestions}`
   element.appendChild(scoreElement)
   const newGameButton=document.createElement('button')
   newGameButton.id=NEW_GAME_BUTTON_ID;
   newGameButton.textContent='New Game'
   element.appendChild(newGameButton)
    
    let catImageUrl;
    if (score < 5) {
        catImageUrl = SAD_CAT_IMAGE;
    } else if (score >= 5 && score < 8) {
        catImageUrl =HAPPY_CAT_IMAGE;
    } else {
        catImageUrl =SUPER_HAPPY_CAT_IMAGE;
    }
    const catImage = document.createElement('img');
    catImage.src = catImageUrl;
    catImage.alt = 'Cat Reaction';
    catImage.className = 'cat-image';
    element.appendChild(catImage);

return element
}



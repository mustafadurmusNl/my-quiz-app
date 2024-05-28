import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';


export const processAnswer = (isCorrect) => {
  if (isCorrect) {
    quizData.score++;
  }

  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    quizData.currentQuestionIndex++;
    initQuestionPage();
  } else {
    endQuiz();
  }
};

const endQuiz = () => {
    initEndingPage();
  }
  export const resetQuiz = () => {
    quizData.currentQuestionIndex = 0;
    quizData.score = 0;
    initQuestionPage();
  };
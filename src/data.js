/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [ 
    {
      text: 'How is the Netherland national football team called?',
      answers: {
        a: 'Oranje',
        b: 'Blues',
        c: 'Lions',
        d: 'Heros',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'What is the highest point of Africa?',
      answers: {
        a: 'Mount Kenya',
        b: 'Mount Klimanjaro',
        c: 'Mount Everest',
        d: 'Mount Blanc'
        
      },
      correct: 'b',
      selected: null,
    },

    {
      text: 'Which country is the largest producer of coffee beans in the world?',
      answers: {
         a: 'Colombia',
         b: 'Kenya',
         c: 'Brazil',
         d: 'Netherland'
      },
      correct: 'c',
      selected: null,
    },
    {                       
      text: 'What is the main cause of wind?',
      answers: {
        a: ' Earth rotation',
        b: 'Ocean currents',
        c: 'Temperature differences',
        d: 'Earth magnetic field',
      },
      correct: 'c',
      selected: null,
    },

    {
      text: 'Who is credited with the discovery of the element Oxygen?',
      answers: {
        a: 'Marie Curie',
        b: 'Albert Einstein',
        c: 'Joseph Priestley',
        d: 'Dmitri Mendeleev',
      },
      correct: 'c',
      selected: null,
    },
    {                     
      text: 'What is the highest point in the Netherlands?',
      answers: {              
        a: 'Vaalserberg',
        b: 'Utrechtse Heuvelrug',
        c: 'Veluwe',
        d: 'Sallandse Heuvelrug',
      },
      correct: 'a',
      selected: null,
    },

    {
      text: 'What is “Stroopwafel” one of the most famous Dutch foods?',
      answers: {
        a: 'A type of cheese',
        b: 'A chocolate biscuit',
        c: 'Thin waffle with caramel',
        d: 'A sweet pie',
      },
      correct: 'c',
      selected: null,
    },
    {      
      text: "Who is known as the 'King of Pop'?",  
      answers: {                                     
        a: "Elvis Presley",
        b: "Michael Jackson",
        c: "Prince",
        d: "Madonna",
      },
      correct: 'b',
      selected: null,
    },

    {
      text: "Which classical composer became deaf later in life?",
      answers: {
        a: "Wolfgang Amadeus Mozart",
        b: "Johann Sebastian Bach",
        c: "Ludwig van Beethoven",
        d: "Franz Schubert",
      },
      correct: 'c',
      selected: null,
    },
    {
      text: "What is the term used to describe the quality of a musical tone that distinguishes it from others of the same pitch and volume?",
      answers: {
        a: 'Timbre',
        b: 'Rhythm',
        c: 'Melody',
        d: 'Harmony',
      },
      correct: 'a',
      selected: null,
    },

  ],
};

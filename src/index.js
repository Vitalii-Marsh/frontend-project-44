import readlineSync from 'readline-sync';

const roundsCounter = 3;

const playBrainGames = (questionAswer, preface) => {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(preface);
    for (let i = 0; i < roundsCounter; i += 1) {
        const [question, answer] = questionAswer();
        console.log(`Question: ${question}`);
        const answerUser = readlineSync.question('Your answer: ');
        if (answerUser === answer) {
            console.log('Correct!');
        } else {
            console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}.`);
            console.log(`Let's try again, ${nameUser}!`);
            return;
        }
    }
        console.log(`Congratualtions ${nameUser}!`);
      
    


};

const randomNum = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
};

const randomOperators = () => {
    const operators = ['+', '-', '*'];
    const numOperator = Math.floor(Math.random() * 3);
    return operators[numOperator];
  };

export {playBrainGames, randomOperators, randomNum};

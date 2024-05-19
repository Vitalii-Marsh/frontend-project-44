import playBrainGames from '../index.js';
import randomNum from '../randomNumbers.js';

const calc = (randomNum1, randomNum2, operator) => {
  switch (operator) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    case '*':
      return randomNum1 * randomNum2;
    default:
      return false;
  }
};

const randomOperators = () => {
  const operators = ['+', '-', '*'];
  const numOperator = Math.floor(Math.random() * 3);
  return operators[numOperator];
};

const preface = 'What is the result of the expression?';

const questionAswer = () => {
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  const operator = randomOperators();
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const answer = String(calc(randomNum1, randomNum2, operator));
  return [question, answer];
};

const play = () => playBrainGames(questionAswer, preface);

export default play;

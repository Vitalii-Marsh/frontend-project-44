import playBrainGames from '../index.js'
import randomNum from '../randomNumbers.js'

const gcd = (num1, num2) => {
    if (num1 == 0) 
        return num2;
	return gcd(num2 % num1, num1);
};

const preface = 'Find the greatest common divisor of given numbers.';

const questionAswer = () => {
    const number1 = randomNum();
    const number2 = randomNum();
    const question = `${number1} ${number2}`;
    const answer = String(gcd(number1, number2));
    return [question, answer];
};

const play = () => playBrainGames(questionAswer, preface);

export default play;
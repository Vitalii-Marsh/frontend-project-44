import playBrainGames from '../index.js'
import randomNum from '../randomNumbers.js';

const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
};

const preface = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const questionAswer = () => {
    const question = randomNum();
    const answer = String(isPrime(question) ? 'yes' : 'no');
    return [question, answer];
};

const play = () => playBrainGames(questionAswer, preface);

export default play;

import playBrainGames from '../index.js';
import randomNum from '../randomNumbers.js';

const preface = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAswer = () => {
    const num = randomNum();
    const question = num;
    const answer = (num % 2 === 0) ? 'yes' : 'no';
    return [question, answer];
};

const play = () => playBrainGames(questionAswer, preface);

export default play;
import playBrainGames from '../index.js'
import { randomNum }  from '../randomNumbersAndOperators.js';

const arithmeticProgression = (start, diff, length, hiddenIndex) => {
    return Array.from({ length }, (_, i) => i * diff + start).map((el, index) => {
      return index === hiddenIndex ? '..' : el;
    }).join(' ');
};

const lengthProgression = 10;

const preface = 'What number is missing in the progression?';

const questionAswer = () => {
    const start = randomNum();
    const diff = randomNum();
    const hiddenInd = randomNum(0, lengthProgression - 1);
    const question = arithmeticProgression(start, diff, lengthProgression, hiddenInd)
    const answer = `${start + diff * hiddenInd}`;
  return [question, answer];
};

const play = () => playBrainGames(questionAswer, preface);

export default play;

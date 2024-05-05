#!/usr/bin/env node

import readlineSync from 'readline-sync';
import welcomeGames from '../src/welcomeGames.js';

const brainEven = () => {
    const name = welcomeGames();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let count = 0
    
    while (count <= 2) {

        let randomNum = Math.floor(Math.random() * 101);
        console.log(`${'Question:'} ${randomNum}`);
        let answerUser = readlineSync.question('Your answer: ');
        if (answerUser === 'yes' || answerUser === 'no') {
        if (answerUser === 'yes' && randomNum % 2 === 0) {
            count += 1;
            console.log('Correct!');
        } else if (answerUser === 'no' && randomNum % 2 === 0) {
            console.log(`${'"no" is wrong answer ;(. Correct answer was "yes".\nLet\'s try again,'} ${name}`);
            break
        } else if (answerUser === 'no' && randomNum % 2 !== 0) {
            count += 1;
            console.log('Correct!');
        } else if (answerUser === 'yes' && randomNum % 2 !== 0) {
            console.log(`${'"yes" is wrong answer ;(. Correct answer was "no".\nLet\'s try again,'} ${name}`);
            break

        }

        } else {
            if (randomNum % 2 === 0) {
                console.log(`${'"'}${answerUser}${'" is wrong answer ;(. Correct answer was "yes".\nLet\'s try again,'} ${name}`);
                break
            } else if (randomNum % 2 !== 0) {
                console.log(`${'"'}${answerUser}${'" is wrong answer ;(. Correct answer was "no".\nLet\'s try again,'} ${name}`);
                break
            }
        }
    }

    console.log(count);

    if (count === 3) {
        console.log(`Congratulations, ${name}!`)
    }

};

brainEven();
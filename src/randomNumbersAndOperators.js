const randomNum = (min = 1, max = 99) => {
  const randomNumber = Math.round(Math.random() * (max - min)) + min;
  return randomNumber;
};

const randomOperators = () => {
    const operators = ['+', '-', '*'];
    const numOperator = Math.floor(Math.random() * 3);
    return operators[numOperator];
  };

export {randomNum, randomOperators};
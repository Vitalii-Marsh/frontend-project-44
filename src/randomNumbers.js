const randomNum = (min = 1, max = 99) => {
  const randomNumber = Math.round(Math.random() * (max - min)) + min;
  return randomNumber;
};

export default randomNum;

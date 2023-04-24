export  function generateRandomNumbers(length, max, min){
  if (length <= 0 || max < min) {
    throw new Error('Invalid input');
  }
  const result = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomNumber);
  }
  return result;
}


export  function generateRandomNumbersByGivenDigitArray(length, digits) {
  const result = [];
  let min, max;
  if (digits === 1) {
    min = 1;
    max = 9;
  } else if (digits === 2) {
    min = 10;
    max = 99;
  } else if (digits === 3) {
    min = 100;
    max = 300;
  } else {
    throw new Error("Invalid number of digits");
  }
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomNumber);
  }
  return result;
}

export function generateRandomNumbersArray3(){
  let numbersArray = [];
  const minNumber = 1;
  const maxNumber = 300;
  for(let i = minNumber; i <= maxNumber; i++) {
    numbersArray.push(i, i, i);
  }
  numbersArray = shuffle(numbersArray);
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return numbersArray
}
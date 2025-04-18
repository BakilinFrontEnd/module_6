// Задание 6.6.1
let word = "Довод";
let lowerCaseWord = word.toLowerCase();
let reversedWord = "";
for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
  reversedWord += lowerCaseWord[i];
}
if (lowerCaseWord === reversedWord) {
  console.log(`Слово ${word} является палиндромом`);
} else {
  console.log(`Слово ${word} не является палиндромом`);
}

// Задание 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    let isUnique = true;
    for (let j = 0; j < uniqueArr.length; j++){
        if (currentValue === uniqueArr[j]){
        isUnique = false;
        break;
        }
    }
    if (isUnique){
        uniqueArr.push(currentValue);
    }
}
console.log(uniqueArr);

// Задание 6.6.3
const userInput = prompt("Введите любое число:");
if (userInput !== null) {
  const endNumber = Number(userInput);
  if (!isNaN(endNumber) && Number.isInteger(endNumber)) {
    const resultArray = [];
    for (let i = 0; i <= endNumber; i++) {
      resultArray.push(i);
    }
    console.log(resultArray);
  } else {
    console.log("Введено некорректное значение. Пожалуйста, введите целое число.");
  }
} else {
  console.log("Ввод отменен пользователем.");
}

// Задание 6.6.4
const size = 3; 
const board = [];
for (let i = 0; i < size; i++) {
  board[i] = [];
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      board[i][j] = 'x';
    } else {
      board[i][j] = 'o';
    }
  }
}
for (let i = 0; i < size; i++) {
  console.log(board[i].join(' '));
}

// Задание 6.6.5
const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there'
};
const arrValues = [];
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = obj[key];
  if (Array.isArray(value)) {
    for (let j = 0; j < value.length; j++) {
      arrValues.push(value[j]);
    }
  } else {
    arrValues.push(value);
  }
}
console.log(arrValues);
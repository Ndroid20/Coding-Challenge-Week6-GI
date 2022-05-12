"use strict";

//EASY

const sample = [1, 2, 3];
const averageCalc = (arr) => {
  const sumArray = arr.reduce((a, b) => a + b, 0) / arr.length;
  return sumArray;
};

console.log(averageCalc(sample));

//MEDIUM

const search = (arr, target) => {
  if (arr.indexOf(target)) {
    console.log(arr.indexOf(target));
  } else {
    console.log(-1);
  }
};

let random = [4, 5, 6, 7, 0, 1, 2];
search(random, 9);

//HARD
//Check index.html file

//VERY HARD

const coinCombo = (coins, amount) => {
  const table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  for (let coin of coins) {
    for (let i = 0; i < table.length; i++) {
      if (coin <= i) {
        let idx = i - coin;
        let potentAmt = table[idx] + 1;
        table[i] = Math.min(potentAmt, table[i]);
      }
    }
  }
  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};
const test = [1, 2, 5];

console.log(coinCombo(test, 11));

const nums = [1, 2, 3, -1, 6, 20, 100, 76, 55, 4, 9, 8, -10, -2, -5, 0];
const numsLinear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

/**
 * Find Min, Max and Margin of an array of numbers
 * -----------------------------------------------------
 * @param {Array} array of numbers
 * @return {Object} { min, max, margin }
 *
 */
function findMinMaxAvg(array) {
  let min = 0;
  let max = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  let margin = max - min;
  return { min, max, margin };
}

console.log(findMinMaxAvg(nums));

/**
 * Fizz Buzz
 * -----------------------------------------------------
 * @param {Array} array of numbers
 *
 */
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 5 == 0 && element % 3 == 0) {
      console.log('FizzBuzz');
    }
    if (element % 5 == 0) {
      console.log('Buzz');
    }
    if (element % 3 == 0) {
      console.log('Fizz');
    }
  }
}

console.log(fizzBuzz(nums));

/**
 * Binary Search
 * -----------------------------------------------------
 * @param {Array} array of numbers
 * @param {Number} target
 *
 */
function binarySearch(array, target) {
  let low = array[0];
  let high = array[array.length - 1];
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guest = array[mid];
    if (guest === target) {
      return mid;
    } else if (guest < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}

console.log(binarySearch(numsLinear, 5));

/**
 * Palindrome : susunan huruf/angka sama dengan huruf/angka terbalik
 * -----------------------------------------------------
 * @param {String} string
 *
 */

function palindrome(string) {
  // cara 1
  // return (
  //   string.toLowerCase() === string.toLowerCase().split('').reverse().join('')
  // );

  // cara 2
  const array = string.toLowerCase().split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome('kodok'));

/**
 * Factorial
 * -----------------------------------------------------
 * @param {String} string
 *
 */

function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(6));

/**
 * Power
 * -----------------------------------------------------
 * @param {Number} num
 * @param {Number} p
 *
 */
function pow(num, p) {
  if (p === 0) return 1;
  return num * pow(num, p - 1);
}

console.log(pow(4, 3));

/**
 * Selection Sort
 * -----------------------------------------------------
 * @param {String} array of numbers
 *
 */

function selectionSort(num) {
  for (let index = 0; index < num.length; index++) {
    const element = num[index];
    for (let i = index + 1; i < num.length; i++) {
      const element2 = num[i];
      if (element > element2) {
        num[index] = element2;
        num[i] = element;
      }
    }
  }
  return num;
}

console.log(selectionSort(nums));

/**
 * Buble Sort
 * -----------------------------------------------------
 * @param {String} array of numbers
 *
 */
function bubbleSort(num) {
  for (let i = 0; i < num.length; i++) {
    for (let index = 0; index < num.length - 1; index++) {
      const element = num[index];
      const element2 = num[index + 1];
      if (element > element2) {
        num[index] = element2;
        num[index + 1] = element;
      }
    }
  }
  return num;
}

// Mutating array
/*
Mutating array is basically changing the array itself instead of returning a new array with the new changes.
Example of Mutator Methods
1. array.shift()
2. array.pop()
3. array.push()
4. array.splice()
5. array.unshift()
*/

// Non-Mutation array
/*
Non-Mutation array is returning a whole new array which has all the changes
Example of Non-Mutating Methods
1. array.concat()
2. array.join()
3. array.slice()
4. array.map()
5. array.filter()
*/

// Question 2
let languages = ["C#", "JavScript", "Ruby", "PHP", "Python"];
console.log(languages);

// Add 'Kotlin' to the end of the array
languages.push("Kotlin");
console.log(languages); // ["C#", "JavScript", "Ruby", "PHP", "Python", "Kotlin"];

// Add 'Java' after 'Ruby'
languages.splice(3, 0, "Java");
console.log(languages); // [ 'C#', 'JavScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]
const removeFirstElement = languages.shift();
console.log("The removed element is " + removeFirstElement); // The removed element is C#
console.log(languages); // [ 'JavScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages); // [ 'Scala', 'Swift', 'JavScript', 'Ruby','Java', 'PHP', 'Python','Kotlin']

// Replace 'PHP' with 'Go' and 'Rust'
// languages.splice(4, , "Go", "Rust");
// console.log(languages);
const replaceGoandRust = languages.indexOf("PHP");
languages.splice(replaceGoandRust, 1, "Go", "Rust");
console.log(languages); // [ 'Scala', 'Swift', 'JavScript', 'Ruby','Java', 'Go', 'Rust' 'Python','Kotlin']

// Question 3
let fruit = ["apple", "mango", "banana"];

function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
console.log(changeFruit(fruit)); // [ 'apple', 'mango', 'orange' ]

// Question 4
function maxNumberArray(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
const givenNumbers = [4, 10, 15, 60, 25, 65];
console.log("The maximum value is " + maxNumberArray(givenNumbers)); // The maximum value is 65

// Question 5
function valTimesIndex(arr) {
  let numMultply = [...arr];
  for (let i = 0; i < arr.length; i++) {
    numMultply[i] = numMultply[i] * i++;
  }
  return numMultply;
}
const arr = [5, 10, 15];
const newArray = valTimesIndex(arr);
console.log(newArray); // [ 0, 10, 30 ]

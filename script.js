/* function learnArrays() {
  let arr = [5, 2, 6, 5, "hello"];
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
}
console.log(learnArrays()); */

// Filter, sort and add two arrays into one
/* let arrayOne = [1, 2, 3];
let arrayTwo = ["str1", "str2", "str3"];

let combinedArray = [...arrayOne, ...arrayTwo];

// arrow function
console.log(combinedArray.filter(element => element < 5).sort((a, b) => b - a)); */

/* function filterArr(arr) {
  return arr.filter(function(element) {
    return element < 5;
  }).sort(function(a, b) {
    return b - a;
  });
}

console.log(filterArr(combinedArray)); */

// Filter and sort array with arrow function
/* let arr = [3, 11, 8, 1, 19, 23, 5, 4];
console.log(arr.filter((element) => element < 10).sort((a, b) => a - b)); */

// Filter and sort array with anonym function
/* function filterAndSortArray(array) {
  return array.filter(function(element) {
    return element < 10;
  }).sort(function(a, b) {
    return a - b;
  });
} 

let resultArray = filterAndSortArray(arr);
console.log(resultArray);
*/
// callback, arrow function
/* let arr = [9, 2, 4];
arr.sort((a, b) => a - b);
console.log(arr);

function sayWord(word, func) {
  console.log(word);
  func(word, word);
}

function hello(a, b) {
console.log("hello"+ a + b);
}
sayWord("say", hello);

hello(3, 4); */

// Find smth in array
/* function findElem(arr, target) {
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}
let arr = [4, "str", 5, 3, "hello"];
let targetElement = "hello";

console.log(findElem(arr, targetElement));

console.log(arr.indexOf(targetElement)); */

/* function calcAreaVolume(length) {
  if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
    return "Wrong digit";
  }
  let volume, area;
  volume = length * length * length;
  area = 6 * (length * length);

  return `Volume is ${volume} and Area is ${area}`;

}


console.log(calcAreaVolume(6)); */

/* function calcPlace(place) {
  if(typeof place !== "number" || place <= 0 || !Number.isInteger(place)) {
    return "Error, try again";
  } else if (place >= 1 && place <= 4) {
    console.log("coupe #1");
  } else if (place >= 5 && place <= 8 ) {
    console.log("coupe #2");
  } else if (place >= 9 && place <= 12) {
    console.log("coupe #3");
  } else if (place >= 13 && place <= 16) {
    console.log("coupe #4");
  } else if (place >= 17 && place <= 20) {
    console.log("coupe #5");
  } else if (place >= 21 && place <= 24) {
    console.log("coupe #6");
  } else if (place >= 25 && place <= 28) {
    console.log("coupe #7");
  } else if (place >= 29 && place <= 32) {
    console.log("coupe #8");
  } else if (place > 32) {
    console.log("No existing place");
  }
}
console.log(calcPlace(10));
 */

/* function digitize(n) {
  // return n.toString().split("").reverse().map(el => +el);
  return n.split("").reverse().join("");
}

let a = digitize("hello");
console.log(a);


let array = [1, 2, 3, 4];
array[4] = 5;

let sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(...array)); */

// sort array with an arrow function
/* var min = function(list){
    
  return list.sort((a, b) => a - b)[0];
}

var max = function(list){
  
  return list.sort((a, b) => b - a)[0];
} */

/* let str = "I like learning JS";
function spl(str) {
  return str.split(" ");
}
console.log(spl(str)); */

// quest from Codewars (done)
/* function countSheeps(sheep) {
  let counter = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === null || sheep[i] === undefined) {
      return "There is wrong datatype";
    } else if (sheep[i] === true) {
      counter += sheep[i];
    }
  }
  return counter;
}

let arr = [
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  true,
];
console.log(countSheeps(arr));
 */

// CALLBACK FUNCTIONS

/* function iCanWriteCallbackFunction(fruit, vegetable, person) {
  console.log(`I like ${fruit}`);
  vegetable();
  person();
}

iCanWriteCallbackFunction("Apples", second, third);

function second() {
  console.log("If a vegetable: pumpkin");
}
function third() {
  console.log("And i love my girlfriend");
}; */

/* const myObj = {
  name: "Josh",
  digit: 10,
  class: "IT",
  colors: {
    background: "blue",
    border: "yellow",
    count: 5,
  },
  age: 20,
  supremacy: "On",
  testing: {
    grow: "up",
    sentence: true,
  },
};

console.log(Object.keys(myObj).length); */

// Desctructuring
/* const person = {
  name: "John",
  age: 20,
  experience: "3 months",
}

function showExperience({experience, name}) {
  return {experience, name};
}
console.log(showExperience(person)); */

// smth with ARRAY
/* let cities = ["KyIV", "LVIV", "KharKIv", "OdesA"];

let lowCase = cities.map(city => city.toLowerCase());
console.log(lowCase.join("\n")); */

// reverse function
/* let str = "String is the boss";
function reverse(str) {
  if (typeof str !== "string") {
    return "Error";
  }
  return str.split("").reverse().join("");
}
console.log(reverse(str));
 */

// array practice
/* const array = [15, "digit", 29, 4, "design", true];
let count = "";

const arrSpl = arr => arr.join(", ");

for(let i = 0; i < array.length; i++) {
  count += array[i];
}

console.log(arrSpl(array));
 */

/* const array = [5, 3, 7, 12, 8];
array.sort((a, b) => a - b);
console.log(array);

console.log(0 || NaN || false || null); */

/* const testObj = {
  name: "Jack",
  age: 20,
  status: "student",
  parents: {
    mama: "Sarah",
    papa: "Daniel",
  }
}

for(let key in testObj) {
  if(typeof(testObj[key]) === "object") {
    for(let i in testObj[key]) {
      console.log(`Feature ${i} has value ${testObj[key][i]}`)
    }
  } else {
    console.log(`Feature ${key} has value ${testObj[key]}`)
  }
} */

/* let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  address: {
    street: "123 Main Street",
    city: "Anytown",
    country: "USA"
  },
  hobbies: ["reading", "traveling", "coding"],
  isActive: true,
  makeTest: function() {
    console.log("Test method");
  }
};
person.makeTest();
console.log(Object.keys(person).length);
 */
// Searching an object using a loop
/* for(let key in person) {
  if(typeof(person[key]) === "object" || Array.isArray(person[key]) || person[key] === "boolean") {
    for(let i in person[key]) {
      console.log(`Feature ${i} has value ${person[key][i]}`);
    }
  } else {
    console.log(`Feature ${key} has value ${person[key]}`);
  }
} */

const newObj = {
  car: "Mercedes",
  method: () => {
    console.log(this.car);
  },
};

newObj.method();

// Створіть об'єкт, у якого є властивість і стрілочна функція в якості методу, яка виводить значення цієї властивості. - Д/З

/* const alen = (length) => {
  if(typeof length !== "number" || length <= 0) {
    console.log("Wrong datatype, positive number is required");
  }
  let volume,
  area;

  volume = length * length * length;
  area = (length * length) * 6;

  console.log(`Volume is ${volume} and area is ${area}`);
}
alen(5); */

/* const count = (a) => {
  return a * a;
};
console.log(count(3)); */

/* const shopingMallData = {
  shops: [
    { width: 8, length: 10 },
    { width: 12, length: 8 },
    { width: 10, length: 8 },
    { width: 14, length: 17 },
    { width: 16, length: 14 },
  ],
  heigth: 10,
  costs: 25,
  budget: 30000,
};

const isBudgetEnough = (string) => {
  let square = 0;
  let volume = 0;

  string.shops.forEach((shops) => {
    square += shops.width * shops.length;
  });
  volume = string.heigth * square;

  if (string.budget - volume * string.costs >= 0) {
    return "Budget is enough";
  } else {
    return "Budget is to small";
  }
};

isBudgetEnough(28000); */

/* function restoreDigit(digit) {
  if(digit !== "number") {
    return "Wrong datatype";
  }
  let str = digit.toString();
  let arr = str.split("");
  let count = "";

  for(let i = 0; i <= arr.length; i++) {
    count += parseInt(arr[i], 10);
  }
}
console.log(restoreDigit(25)); */

/* const arr = [3, 2, 7, 5];

console.log(arr.sort((a, b) => a - b));

const digit = (num) => {
  console.log(num);
  return num * 2;
}
const func = (arr) => {
  return arr.map(digit);
}
console.log(func(arr));
 */

const someValues = {
  fruit: "Apple",
  vegetable: "Tomato",
  calcGrocery: (a, b) => {
    console.log(a + b);
  },
  showFruit: function () {
    console.log(this.fruit);
  },
  priceOfApple: (3.493).toFixed(2),
  priceofTomato: (4.304).toFixed(2),
  getPrice: function (productName, productQuantity) {
    switch (productName === "Apple" || productName === "Tomato") {
      case productName === "Apple":
        return `${this.priceOfApple * productQuantity} €`;
      case productName === "Tomato":
        return `${this.priceofTomato * productQuantity} €`;
      default:
        return "Wrong grocery";
    }
    /*  if(productName === "Apple") {
      return this.priceOfApple * productQuantity + " €";
    } 
    if(productName === "Tomato") {
      return this.priceofTomato * productQuantity;
    } */
  },
};
someValues.calcGrocery(5, 5);
someValues.showFruit();
console.log(someValues.getPrice("Apple", 7));
console.log(someValues.getPrice("Tomato", 4));

// If else у switch case
// округлити результат до сотень
// Додати до ціни знак €
// написати інтерполацію до виводу

//! Написати курс валют: вводиться назва валюти(яка дається), скільки грошей у цій валюті, у що конвертувати.

const exchangeBudka = {
  EUR: 41.0,
  USD: 39.4,
  PLN: 15.2,
  CFH: 50.75,
  GBP: 47.4,
};

function calcCurrency(currancyName, moneyAmount, convertedCurrency) {
  if (isNaN(moneyAmount) || moneyAmount <= 0) {
    return "Type error";
  }
  let exchangedCurrency = (currancyName * moneyAmount) / convertedCurrency;
  return exchangedCurrency.toFixed(2);
}
console.log(calcCurrency(exchangeBudka.EUR, 20, exchangeBudka.GBP));

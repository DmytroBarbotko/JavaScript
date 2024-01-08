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
function countSheeps(sheep) {
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

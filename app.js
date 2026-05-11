// -------------------> LOOPS AND STRINGS <-------------------

// ----> LOOPS <----

// let str = "Hafsa";
// let size = 0;
// for (let value of str) {
//     console.log("value =", value);
//     size++;
// }

// console.log("size of string =", size);

// for (let i = 0; i <= 100; i++) {
//   if (i % 2===0) {
//     console.log(i);
//   }
// }

// let gameNum = 7;

// let userNum = +prompt(`Enter A Secret Number:`);
// while (userNum != gameNum) {
//     userNum = prompt(`You enter wrong number. Guess again:`);
// }
// alert("Congratulations! you guess the secret number")

// ----> STRING <----

// let str = ("HafsaImran");
// console.log(str)
// console.log(str[4])
// console.log(`Length of string is `,str.length)

// let str = "Hafsa Imran";
// console.log(str)
// let newStr= str.toUpperCase()
// console.log(newStr)
// newStr=str.toLowerCase()
// console.log(newStr)
// let trimStr = "   Hafsa Imran   ";
// console.log(trimStr.trim());

// let str = "HafsaImran";
// console.log(str.slice(2,8));
// let str = "Hafsa";
// let str2 = "Imran";
// let result = str.concat(str2);
// console.log(result);

// let userName = prompt("Enter Your Full Name");
// let fullName ="@"+userName+userName.length
// console.log(fullName);

// ----> ARRAYS <----

// let heroes=["ironman","sipderman","batman","superman",]

// for loop
// for (let i = 0; i < heroes.length; i++){
//     console.log(heroes[i])
// }

// for of loop
// for (hero of heroes) {
//     console.log(hero)
// }

// let marks = [50, 84, 87, 68, 47, 91];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(`Average marks of class = ${avg.toFixed(2)}`);

// let items = [250, 300, 150, 400,500];
// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
// }
// console.log(items);

// 03
// let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflex"];
// console.log(companies);
// companies.shift()
// console.log(companies);
// companies.splice(1, 1, "ola");
// console.log(companies);
// companies.push("amazon");
// console.log(companies);

// ----> NESTED FOR LOOP <----

// let num = 2;
// for (let i = 1; i <= 10; i++) {

//   console.log(`${num} x ${i} = ${num*i}`);
// }
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     document.write("*");
//   }
//   document.write("<br/>");
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br/>");
// }
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//       for (let k = 1; k <= 3; k++){
//           document.write("*");

//       }
//   }
// }

// let currentAge = prompt("Enter your age.");
// let qualifyingAge = parseInt(currentAge) + 3;

// console.log(qualifyingAge);

// ----> STRING TO NUMBER <---- (FOR PROMPT)

// let fInt = parseInt("132");
// let secInt = parseInt("8");
// console.log(fInt+secInt);
// console.log(typeof fInt);

// ----> STRING TO FLOATING NUMBER <----

// let myFractional = parseFloat("2.543");
// console.log(myFractional);
// console.log(typeof myFractional);

// ----> STRING TO NUMBER <----

// let integerString = "24.432";
// let num = Number(integerString);
// console.log(num);
// console.log(typeof num);

// ----> NUMBER TO STRING <----

// let num = 24;
// let str = num.toString();
// console.log(str);
// console.log(typeof str);

// -------------------> DATE AND TIME <-------------------

// let rightNow = new Date();
// let theDay = rightNow.getDay();
// console.log(theDay);

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let now = new Date();
// let theDay = now.getDay();
// let nameOfToday = dayNames[theDay]

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// let now = new Date()
// let theDay = now.getDay()
// let nameOfToday=dayNames[theDay]
// console.log(nameOfToday)

// -------------------> FUNCTIONS <-------------------

// ----> Function Declaration <----

// function add(num1, num2) {
//     console.log(num1+num2);

// }
// add(2,4)

// ----> Function Expression <----

// let add = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(add(2,4));

// ----> Arrow Function <----(ES 6)

// add = (num1, num2) => num1 + num2;
// console.log(add(2,4));

// ----> Rest Case <----

// function calculateCartPrice(...num) {
//     return num
// }
// console.log(calculateCartPrice(40,30,100));

// practice

// let countVowel = (character) => {
//   let count = 0;
//   for (let char of character) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//     }
//     console.log(count);
    
// };
// countVowel("hafsa ayesha");

// ----> CallBack Function <----


// let arr = [1, 2, 3, 4]
// arr.forEach(printVal)

// function printVal(val) {
//     console.log(val);
// }

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value + "<br>";
// }

// ----> forEach Functions <----

// const numbers = [24, 53, 21, 32, 1]
// let txt = ""
// numbers.forEach(myFunction)

// function myFunction(num) {
//     console.log(num);
    
// }

// ----> ARRAY METHODS () <----

// ----------practice----------


// let arr = [45, 97, 54, 96, 23, 67, 91];
// let result = arr.filter(num => num > 90)
// console.log(`Students score above 90 = ${result}`);


// let n = parseInt(prompt("Enter a number"))
// let arr = []
// for (let i = 1; i <= n; i++){
//    arr[i-1]=i
// }
// console.log(arr);


// let sum = arr.reduce((res, curr) => {
//     return res + curr
// })
// console.log(`Sum is ${sum}`);
// let product = arr.reduce((res, curr) => {
//     return res * curr
// })
// console.log(`Factorial is ${product}`);

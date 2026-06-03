// -----------> DOM MANIPULATION ( DOM = Document Object Model) <-------------

// CONSOLE.DIR() => JavaScript me kisi object ki detailed properties dekhne ke liye use hota hai.

// ----> GET ID <----

// let id = document.getElementById("email")
// console.dir(id)
// console.log(id)

// ----> GET CLASS <----

// let cl = document.getElementsByClassName("contact")
// console.dir(cl)
// console.log(cl)

// ----> GET TAG <----

// let tag = document.getElementsByTagName("p")
// console.dir(tag)
// console.log(tag);

// ----> QUERY SELECTOR <----

// let heading = document.querySelector("#heading-id")
// console.dir(heading)

// let heading = document.querySelectorAll(".heading")
// console.dir(heading)

// ----> DOM Properties <----
// (innerHtml, innerText, innerElement)

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college student"
// console.log(h2.innerText);

// let divs = document.querySelectorAll(".box")
// let idx = 1
// for(div of divs){
//     div.innerText = `new unique value ${idx}`
//     idx ++
// }

// ----> DOM Practice <----

// function changeText() {
//   // get element by id
//   let head = document.getElementById("heading");
//   // inner text
//   head.innerText = "Welcome Hafsa";
//   console.log(head.tagName);
//   // get element by class name
//   let para = document.getElementsByClassName("text");
//   // inner text
//   console.log(para[0].innerText);
//     //   get element by tag name
//     let pTag = document.getElementsByTagName("p")
//     console.log(pTag.length);
// }

// ----> DOM Practice <----

// let div = document.querySelector("div")
// console.log(div);

// let id= div.getAttribute("id")
// console.log(id);

// CHAT GPT Practice Questions
// 01
// let id = document.getElementById("title");
// console.dir(id);
// title.innerText = "Hello";
// // 02
// let p = document.getElementById("para");
// console.log(p.innerHTML);

// let div = document.querySelector("#box");
// box.innerText = "new html"

// let tags = document.getElementById("tag")
// console.log(tags.tagName);

// EVENTS

// let greet = () => {
//   alert("Hello World");
//   console.log("how are you");
// };

// let change = (event) => {
//   console.log("mouse is wheeling");

//   event.target.src = "./images/cat.jpg";
// };

// let out = (event) => {
//   event.target.src = "./images/butterfly.jpg";
// };

// let check = (event) => {
//     console.log(event.key);
//     alert("key pressed")
// }

// document.getElementById("btn").addEventListener("click", () => {
//     alert("hello")
// })

// document.getElementById("field").addEventListener("focus", () => {
//     console.log("clicking");
// })
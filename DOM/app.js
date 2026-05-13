// -----------> DOM MANIPULATION ( DOM = Document Object Model) <-------------

// ----> GET ID <----

// let id = document.getElementById("email")
// console.dir(id)

// ----> GET CLASS <----

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

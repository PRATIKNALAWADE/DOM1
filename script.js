console.log("script.js");


//1st add elements
//1a using appendCHild method - > divs spans and <a> tag
//1b using append multiple and flexible


const body= document.body

body.append("Hello ","I'm ","using ","append");




//1create element

const h1ele =document.createElement("h1");
h1ele.innerText = "h1ele";
//add to html
body.appendChild(h1ele);

const h2ele = document.createElement("h2");
h2ele.innerText = "h2ele";


body.append(h2ele,"element");





//2 modifying element text

let span2 = document.getElementById("span2");
let span = document.querySelector("div");

console.log(span.textContent);
console.log(span.innerText);//Text dikhega toh btaunga


//2b modifying the html inside

let span1 = document.querySelector("#span1");

span1.innerHTML ="<h1>Span1</h1>"




//3 removing elements
//3adelete 
span1.remove();


//getting it back
const div = document.querySelector("#span");
div.append(span1);

//3b remove child
div.removeChild(span1);
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myString;
let myNumber;
let myBoolean;
let myArray;
let myObject;
myString = 'BoB';
myNumber = 10;
myBoolean = true;
myArray = [1,'Bob','Steve',10];
myObject = document.querySelector('h1'); //whats this?

alert("hello!");

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

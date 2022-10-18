'use strict';

let usersName;

function greeting(){
  usersName = prompt("Hey! Whats your name?");
  console.log("Whats good " + usersName);
  document.write("Whats up " + usersName);
  return usersName;
} 

greeting();

if (usersName == "Brenden"){
} else if (usersName == "brenden"){
  document.write(", the almighty creator");
}

let userAnswer;

function switchYesNo(){
  if (confirm("Do you own a Switch?")) {
    document.write(". Thats great! Add my friend code: SW-8160-7494-2138");
    alert ("Nice!");
  }  else {
    document.write(". I hope this page will convince you to get a Switch!");
}
console.log("Switch question");
}

switchYesNo();



// 'use strict';

let usersName;

function greeting(){
  usersName = prompt("Hey! I would like to ask a few questions before bringing you to my page! Whats your name?");
  document.write("Whats up " + usersName)
  console.log('Whats good ' + usersName);
  return usersName;
} 

greeting();

if (usersName == 'Brenden'){
} else if (usersName == 'brenden'){
  document.write(', the almighty creator');
}

let userAnswer;

function switchYesNo(){
  if (confirm('Do you own a Switch?')) {
    document.write('. Thats great! Add my friend code: SW-8160-7494-2138');
    alert ('Nice!');
  }  else {
    document.write('. I hope this page will convince you to get a Switch!');
}
console.log('Switch question');
}

switchYesNo();


questionTwo();



let userAnswerTwo

function questionTwo(){
  let userAnswerTwo = prompt('Who is Super Marios greatest enemy?');{
    
    while (userAnswerTwo !== 'bowser'){
      userAnswerTwo = prompt('incorrect... Hint: Hes the leader of the Koopa race');
    }
  }
  
  alert('You have answered correctly!')
  console.log(userAnswerTwo);
}
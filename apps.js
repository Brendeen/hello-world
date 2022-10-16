let nameSpace = prompt("Hey! Whats your name?");
document.write("Whats up ", nameSpace);
console.log(nameSpace);

if (nameSpace == "Brenden"){
  document.write(", the almighty creator")
}
console.log(nameSpace);

if (confirm("Do you own a Switch?")) {
    document.write(". Thats great! Add my friend code: SW-8160-7494-2138");
    alert ("Nice!");
}  else {
    document.write(". I hope this page will convince you to get a Switch!");
}
console.log("Do you own a Switch?");
console.log("Hello World!")

/*
  console.log("This won't show up in the console")

*/

// Varables
const x = 5
const y = 6
const z = x + y
console.log("x + y=", z);

// More examples
let numberexample = 4;
numberexample = 1

let numberofbottles  = 10

const line1 = "10 Green bottles hanging on the wall"
const line2 =
  "and if one green bottle falls there will be 9"

console.log(line1, line2)
console.log(numberofbottles-1-1)


// P5Operators

kmh = 72
time = kmh/3.6
  console.log(time)

minutes = 3
time2 = minutes*60
console.log(time2)


//
const string = "Number1"
let  Number1 = 3
const string2 = "Number2"
let Number2 = 13
console.log(Number1+Number2)



let playertouchground = true;
if (playertouchground) {
  console.log("player is on the ground") ;
  console.log("player can jump") ;
}

if (!playertouchground) {
  console.log("player is not touching the ground") ;
  console.log("you cannot jump right now") ;
}



const customerName = "Elmer Tuner"
let customerAge = 22
let hasCash = false;
let hasCard = false;

function main(name, age, cash, card) {
  console.log(name);
  console.log(age);
  console.log(cash);
  console.log(card);
}

function checkAge(Age){
  if(Age < 14){
    console.log("You are too young to have coffee");
  }else{
    console.log("You buy a coffee");
  }
}
function payment(cash, card) {
  if (card){
    console.log("You pay with card");
  }else if(cash){
    console.log("You pay with cash");
  }else{
    console.log("You cant pay");
  }
}

main(customerName, customerAge, hasCash, hasCard);

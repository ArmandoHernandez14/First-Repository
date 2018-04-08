console.log("Print all numbers between -10 and 19");
var NegNumber = -10;
while(NegNumber <= 19){
  console.log(NegNumber);
  NegNumber++;
}
console.log("Print all even numbers between 10 and 40");
var ten = 10;
while(ten <= 40){
  console.log(ten);
  ten+=2;
}
console.log("Print all odd numbers between 300 and 333");
var odd = 300;
while(odd<=333){
  console.log(odd + 1);
  odd+=2;
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var numbers = 5;
while(numbers < 50){
  if (numbers % 3 == 0 && numbers % 5 == 0) {
    console.log(numbers);
  }
  numbers++;
}

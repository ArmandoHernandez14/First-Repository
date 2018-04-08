console.log(2000/2);
//The Secret Number
var secret_Number = 7;
// Asking user to guess the Number
var number = Number(prompt("Guess a number"));
//If the user get's it right
if(number === secret_Number){
  alert("You guessed it!");
}
//If the user types a number less than the secret_Number
if(number < 7){
  alert("To low, try again");
}
//If the user types a number greater than the secret_Number
if(number>7){
  alert("To high, try again");
}

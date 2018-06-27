var Player1 = document.querySelector("#P1");
var Player2 = document.getElementById("P2");
var P1score = 0;
var P2score = 0;
var span1 = document.querySelector("span");
var span2 = document.querySelectorAll("span")[1];
var Reset = document.querySelectorAll("button")[2];
var gameover = false;
var winningScore = 5;
var h3 = document.querySelectorAll("span")[2];
var input = document.querySelector("input");

Player1.addEventListener("click",function(){
if(!gameover){
 P1score++;
 if(P1score === winningScore){
   span1.classList.add("winner");
  gameover = true;
 }
 span1.textContent = P1score;
}
});

Player2.addEventListener("click",function(){
 if(!gameover){
 P2score++;
  if(P2score === winningScore){
    gameover = true;
    span2.classList.add("winner");
  }
 span2.textContent = P2score;
}
});

Reset.addEventListener("click",function(){
 reset();
});

function reset(){
  P1score = 0;
  P2score = 0;
  span1.textContent = P1score;
  span2.textContent = P2score;
  if(gameover === true){
    gameover = false;
  }
    span1.classList.remove("winner");
    span2.classList.remove("winner");
}

input.addEventListener("change",function(){
  h3.textContent = input.value;
  winningScore = Number(input.value);
  reset();
});

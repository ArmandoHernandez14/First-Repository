var button = document.querySelector("button");
var body = document.querySelector("body");
//console.log("Hello World!");
button.addEventListener("click",function(){
  if(body.style.background === "purple"){
    body.style.background = "white";
  }else
  body.style.background = "purple";
});

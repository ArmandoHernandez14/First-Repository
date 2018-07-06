var first = document.querySelectorAll("li");

for(var i =0;i<first.length;i++){
  first[i].addEventListener("mouseover",function(){
   this.classList.add("selected");
  });
  first[i].addEventListener("mouseout",function(){
    this.classList.remove("selected");
  });
  first[i].addEventListener("click",function(){
    this.classList.toggle("done");
  });
}

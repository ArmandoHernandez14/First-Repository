function isEven(x){
  if(x % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

function factorial(input){
  var result = input;
  if(result === 0){
    console.log(1);
  }
  else{
    for(var i = 1; i< input; i++){
      result = i * result;
    }
    console.log(result;)
  }
}

function kebabToSnake(bob){
  var armando = bob.replace("-", "_");
  console.log(armando);
}

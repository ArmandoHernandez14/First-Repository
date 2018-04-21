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
    return 1;
  }
  else{
    for(var i = 1; i< input; i++){
      result = i * result;
    }
    return result;
  }
}

function kebabToSnake(bob){
 var newStr = bob.replace(/-/g, "_");
  return newStr;
}

var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
if(input === "list"){
  listItem();
}else if (input == "new") {
 addItem();
}else if (input === "delete") {
 deleteItem();
}
   input = prompt("What would you like to do?");
}
console.log("Ok, You quit the app");

function deleteItem(){
  var index = prompt("Enter index of todo to delete");
  todos.splice(index, 1);
  alert("Item deleted");
}

function addItem(){
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  alert("Item added");
}

function listItem(){
  console.log("*******");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("*******");
}

const TODOS = "todos";
var todos = localStorage.getItem(TODOS);

const todo_form_2 = document.querySelector(".js-todo-form"),
  todo_input_2 = todo_form_2.querySelector("input");
const todolist_2 = document.querySelector(".todolist");

function refreshTodoLiID(item, index) {
  item.id = index + 1;
}

function handleClick(e) {
  const li = e.target.parentNode;

  //refresh localStorage
  var list = JSON.parse(todos);
  var newList = new Array();
  var i;
  for (i = 0; i < list.length; i++) {
    const index = parseInt(li.id) - 1;
    if (i !== index) newList.push(list[i]);
    console.log(`i:${i}   index:${index}`);
  }

  console.log(newList);

  if (newList.length == 0) localStorage.removeItem(TODOS);
  else {
    todos = JSON.stringify(newList);
    localStorage.setItem(TODOS, todos);
  }

  // todos = JSON.stringify(list);
  // localStorage.setItem(TODOS, todos);

  todolist_2.removeChild(li);

  const remainingTodos = todolist_2.querySelectorAll("li");
  remainingTodos.forEach(refreshTodoLiID);
}

function addTodo(item, index) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const todo_text = document.createElement("span");
  delbtn.innerHTML = "X";
  delbtn.addEventListener("click", handleClick);
  todo_text.innerHTML = item;
  li.id = (index + 1).toString();
  li.appendChild(delbtn);
  li.appendChild(todo_text);
  todolist_2.appendChild(li);
}

function paintTodos() {
  const list = JSON.parse(todos);
  list.forEach(addTodo);
}

function handleSubmit(event) {
  event.preventDefault();

  const value = todo_input_2.value;
  var list = JSON.parse(todos);
  list.push(value);
  todos = JSON.stringify(list);
  localStorage.setItem(TODOS, todos);

  addTodo(value, list.lenght + 1);
  todo_input_2.value = "";
}

function init() {
  todo_form_2.addEventListener("submit", handleSubmit);
  if (todos == null) {
    const todos_arry = new Array();
    todos = JSON.stringify(todos_arry);
  } else {
    paintTodos();
  }
}

init();

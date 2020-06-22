const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const todo_form = document.querySelector(".js-todo-form");
const todo_input = todo_form.querySelector("input");
const todolist = document.querySelector(".todolist");
const USER_NAME = "user_name";
const CLASS_HIDE = "hide";

function hideForm() {
  form.classList.add(CLASS_HIDE);
}

function paintTodo() {
  todo_form.classList.remove(CLASS_HIDE);
  todolist.classList.remove(CLASS_HIDE);
}

function paintGreeting(name) {
  hideForm();
  greeting.innerHTML = `Hi ${name}`;
  greeting.classList.remove(CLASS_HIDE);
}

function handleSubmit(event) {
  event.preventDefault();
  const value = input.value;
  localStorage.setItem(USER_NAME, value);
  paintGreeting(value);
}

function init() {
  const name = localStorage.getItem(USER_NAME);

  if (name == null) {
    // input.addEventListener("submit", handleSubmit);
    // console.log("dsfsf");
    form.addEventListener("submit", handleSubmit);
  } else {
    paintGreeting(name);
    paintTodo();
  }
}

init();

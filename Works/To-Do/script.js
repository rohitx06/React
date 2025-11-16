// Dom manipulation
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

const savedTodo = localStorage.getItem("todos");
const todos = savedTodo ? JSON.parse(savedTodo) : [];

function getTodo() {
  // loading from localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoNode(todo, index) {
  const li = document.createElement("li");

  // checkbox to toggle completion
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = !!todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;

    // TODO: Visual feedback: strike-through when completed
    textSpan.style.textDecoration = todo.completed ? "line-through" : "";
    getTodo();
  });

  // Text of the todo
  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.style.margin = "0 8px";
  if (todo.completed) {
    textSpan.style.textDecoration = "line-through";
  }
  // Add double-click event listener to edit todo
  textSpan.addEventListener("dblclick", () => {
    const newText = prompt("Edit todo", todo.text);
    if (newText !== null) {
      todo.text = newText.trim();
      textSpan.textContent = todo.text;
      getTodo();
    }
  });

  // Delete Todo Button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    render();
    getTodo();
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(delBtn);
  return li;
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const node = createTodoNode(todo, index);
    list.appendChild(node);
  });
}

function addTodo() {
  const text = input.value.trim();
  if (!text) {
    return;
  }

  todos.push({ text, completed: false });
  input.value = "";
  render();
  getTodo();
}

button.addEventListener("click", addTodo);
render();

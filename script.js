let tasks = [];

function handleKey(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function addTask() {
  let input = document.getElementById("taskInput");

  let text = input.value;

  if (text === "") {
    alert("Enter a task");
    return;
  }

  tasks.push({
    text: text,
    done: false,
  });

  input.value = "";

  displayTasks();
}

function displayTasks() {
  let list = document.getElementById("taskList");

  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    li.innerHTML = `<div>
<input type="checkbox" ${tasks[i].done ? "checked" : ""} onclick="toggleTask(${i})">

<span class="task-text ${tasks[i].done ? "completed" : ""}">
${tasks[i].text}
</span>
</div>

<button class="delete" onclick="deleteTask(${i})">Delete</button>`;

    list.appendChild(li);
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;

  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  displayTasks();
}

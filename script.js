let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");

  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(task);

  input.value = "";

  displayTasks();
}

function displayTasks() {
  let list = document.getElementById("taskList");

  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    li.innerHTML =
      tasks[i] + " <button onclick='deleteTask(" + i + ")'>Delete</button>";

    list.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);

  displayTasks();
}

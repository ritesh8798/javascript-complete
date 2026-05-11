document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById("input");
  let btn = document.getElementById("btn");
  let list = document.getElementById("list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  btn.addEventListener("click", () => {
    let task = input.value;

    if (task === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    input.value = "";

  });

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTask(task) {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    if (task.completed) li.classList.add('completed');
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>`;

    li.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') return;
      task.completed = !task.completed;
      li.classList.toggle('completed');
      saveTask();
    });

    li.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      tasks = tasks.filter(t => t.id !== task.id);
      li.remove();
      saveTask();
    })
    list.appendChild(li);
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") btn.click();
  })
});
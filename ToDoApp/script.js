function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDesc = document.getElementById("taskDesc");

  const title = taskInput.value.trim();
  const description = taskDesc.value.trim();

  if (title === "") return;

  const timeStamp = new Date().toLocaleString();
  const li = createTaskItem(title, description, timeStamp, false);

  document.getElementById("pendingTasks").appendChild(li);

  taskInput.value = "";
  taskDesc.value = "";
}

function createTaskItem(title, description, dateTime, isCompleted) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerHTML = `
    <strong>${title}</strong><br>
    <em>${description}</em><br>
    <small>${isCompleted ? "✅ Completed on: " : "📅 Added on: "} ${dateTime}</small>
  `;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-buttons");

  if (!isCompleted) {
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.title = "Mark as Completed";
    completeBtn.onclick = () => {
      li.remove();
      const completedTime = new Date().toLocaleString();
      const completedItem = createTaskItem(title, description, completedTime, true);
      document.getElementById("completedTasks").appendChild(completedItem);
    };
    btnContainer.appendChild(completeBtn);
  }

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.title = "Edit Task";
  editBtn.onclick = () => {
    const newTitle = prompt("Edit task title:", title);
    const newDesc = prompt("Edit task description:", description);
    if (newTitle !== null && newDesc !== null) {
      span.innerHTML = `
        <strong>${newTitle}</strong><br>
        <em>${newDesc}</em><br>
        <small>✏️ Edited on: ${new Date().toLocaleString()}</small>
      `;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.title = "Delete Task";
  deleteBtn.onclick = () => li.remove();

  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  return li;
}

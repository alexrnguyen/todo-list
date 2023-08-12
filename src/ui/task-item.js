import { format } from "date-fns";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";

const createTaskItem = (task) => {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  // Task Priority
  const priority = document.createElement("div");
  priority.classList.add("task-priority");
  priority.classList.add(task.priority);

  taskItem.appendChild(priority);

  // Task Status
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-checkbox";
  checkbox.name = "task-checkbox";
  checkbox.checked = task.status;

  checkbox.addEventListener("click", () => task.changeStatus());

  taskItem.appendChild(checkbox);

  // Task Name
  const name = document.createElement("p");
  name.className = "task-name";
  name.textContent = task.name;
  taskItem.appendChild(name);

  // Details Button
  const detailsButton = document.createElement("button");
  detailsButton.className = "details-button";
  detailsButton.textContent = "Details";

  taskItem.appendChild(detailsButton);

  // Task Date
  const date = document.createElement("p");
  date.className = "task-date";
  date.textContent = format(task.date, "yyyy-MM-dd");
  taskItem.appendChild(date);

  // Edit Button
  const editButton = document.createElement("button");
  editButton.className = "task-edit-button";

  const editIcon = new Image();
  editIcon.classList.add("icon");
  editIcon.src = EditIcon;
  editButton.appendChild(editIcon);

  taskItem.appendChild(editButton);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.className = "task-delete-button";

  const deleteIcon = new Image();
  deleteIcon.classList.add("icon");
  deleteIcon.src = DeleteIcon;
  deleteButton.appendChild(deleteIcon);

  taskItem.appendChild(deleteButton);
};

export default createTaskItem;

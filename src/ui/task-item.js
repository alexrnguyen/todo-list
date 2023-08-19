import { format, parseISO } from "date-fns";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { removeTaskItem } from "./project-content";
import { triggerTaskEditModal } from "./edit-modal";
import { updateProjectCount } from "./sidebar";
import { updateProjects } from "../controllers/storage";
import { getProjects } from "../controllers/project-controller";

const createTaskItem = (task, project) => {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.classList.add(`priority-${task.priority.toLowerCase()}`);

  // Add border colour of green if the task is already completed
  if (task.status) {
    taskItem.classList.add("completed");
  }

  // Task Status
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-checkbox";
  checkbox.name = "task-checkbox";
  checkbox.checked = task.status;

  checkbox.addEventListener("click", () => {
    task.changeStatus();
    const priority = task.priority;
    markAsComplete(taskItem, priority);
    updateProjects(getProjects());
  });

  taskItem.appendChild(checkbox);

  // Task Name
  const name = document.createElement("p");
  name.className = "task-name";
  name.textContent = task.name;
  taskItem.appendChild(name);

  // Task Date
  const date = document.createElement("p");
  date.className = "task-date";
  date.textContent = format(parseISO(task.dueDate), "yyyy-MM-dd");
  taskItem.appendChild(date);

  // Edit Button
  const editButton = document.createElement("button");
  editButton.className = "task-edit-button";

  const editIcon = new Image();
  editIcon.classList.add("icon");
  editIcon.src = EditIcon;
  editButton.appendChild(editIcon);

  editButton.addEventListener("click", () => {
    triggerTaskEditModal(task, project);
    updateProjects(getProjects());
  });

  taskItem.appendChild(editButton);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("task-delete-button");
  deleteButton.classList.add("delete-button");

  const deleteIcon = new Image();
  deleteIcon.classList.add("icon");
  deleteIcon.src = DeleteIcon;
  deleteButton.appendChild(deleteIcon);

  deleteButton.addEventListener("click", () => {
    project.removeTask(task);
    removeTaskItem(taskItem);
    updateProjects(getProjects());
    updateProjectCount(project, false);
  });

  taskItem.appendChild(deleteButton);

  return taskItem;
};

const markAsComplete = (taskItem) => {
  taskItem.classList.toggle("completed");
};

export default createTaskItem;

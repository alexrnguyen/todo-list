import {
  getProjects,
  removeProjectItem,
} from "../controllers/project-controller";
import { removeProjectFromSidebar, toggleActiveItem } from "./sidebar";
import createTaskItem from "./task-item";
import { triggerTaskModal } from "./modal";
import AddIcon from "../assets/add.svg";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { triggerProjectEditModal } from "./edit-modal";
import { updateProjects } from "../controllers/storage";

const createProjectContainer = () => {
  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";

  projectContainer.appendChild(loadGeneralProject(getProjects()[0]));
  const generalProject = document.querySelector(".project-item");
  generalProject.classList.add("general");
  toggleActiveItem(document.querySelector(".general")); // Set General as initial active project
  return projectContainer;
};

const loadGeneralProject = (project) => {
  const projectContent = document.createElement("div");
  projectContent.id = "project-content";

  const contentHeader = document.createElement("div");
  contentHeader.id = "content-header";

  const projectName = document.createElement("h2");
  projectName.className = "project-name";
  projectName.textContent = project.name;

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent = project.description;

  contentHeader.appendChild(projectName);
  contentHeader.appendChild(projectDescription);

  projectContent.appendChild(contentHeader);

  const tasks = project.tasks;

  const taskItemContainer = document.createElement("div");
  taskItemContainer.id = "task-items-container";

  tasks.forEach((task) => {
    taskItemContainer.appendChild(createTaskItem(task, project));
  });

  const addTaskButton = document.createElement("button");
  addTaskButton.id = "add-task-button";
  const addIcon = new Image();
  addIcon.src = AddIcon;
  addTaskButton.appendChild(addIcon);
  addTaskButton.addEventListener("click", () => {
    triggerTaskModal(project);
  });

  const addTaskText = document.createElement("p");
  addTaskText.textContent = "Add Task";
  addTaskButton.appendChild(addTaskText);

  taskItemContainer.appendChild(addTaskButton);

  projectContent.appendChild(taskItemContainer);

  return projectContent;
};

const loadProject = (project) => {
  const projectContainer = document.getElementById("project-container");
  const projectContent = loadGeneralProject(project);
  projectContainer.appendChild(projectContent);

  const editButton = document.createElement("button");
  editButton.classList = "project-edit-button";
  editButton.textContent = "Edit";
  const editIcon = new Image();
  editIcon.classList.add("icon");
  editIcon.src = EditIcon;
  editButton.appendChild(editIcon);

  editButton.addEventListener("click", () => {
    triggerProjectEditModal(project);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("project-delete-button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  const deleteIcon = new Image();
  deleteIcon.classList.add("icon");
  deleteIcon.src = DeleteIcon;
  deleteButton.appendChild(deleteIcon);

  deleteButton.addEventListener("click", () => {
    removeProjectFromSidebar(project);
    removeProjectItem(project);
    updateProjects(getProjects());
    projectContainer.innerHTML = "";
  });

  const contentHeader = document.getElementById("content-header");
  contentHeader.appendChild(editButton);
  contentHeader.appendChild(deleteButton);

  return projectContent;
};

const clearContent = () => {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = "";
};

const changeProject = (projectItem, project) => {
  const projectContainer = document.getElementById("project-container");
  clearContent();
  toggleActiveItem(projectItem);
  if (projectItem.classList.contains("general")) {
    projectContainer.appendChild(loadGeneralProject(getProjects()[0]));
  } else {
    projectContainer.appendChild(loadProject(project));
  }
};

const updateTaskItem = (task, project) => {
  const index = project.tasks.indexOf(task);
  const taskItemToUpdate = document.querySelectorAll(".task-item")[index];
  const taskItemsContainer = document.getElementById("task-items-container");
  const updatedTaskItem = createTaskItem(task, project);
  taskItemsContainer.insertBefore(updatedTaskItem, taskItemToUpdate);
  taskItemsContainer.removeChild(taskItemToUpdate);
};

const removeTaskItem = (taskItem) => {
  const taskItemsContainer = document.getElementById("task-items-container");
  taskItemsContainer.removeChild(taskItem);
};

export {
  createProjectContainer,
  loadProject,
  clearContent,
  changeProject,
  updateTaskItem,
  removeTaskItem,
};

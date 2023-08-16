import {
  getProjects,
  removeProjectItem,
} from "../controllers/project-controller";
import { removeProjectFromSidebar, toggleActiveItem } from "./sidebar";
import createTaskItem from "./task-item";
import { triggerTaskModal } from "./modal";
import AddIcon from "../assets/add.svg";

const createProjectContainer = () => {
  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";

  console.log(getProjects()[0]);
  projectContainer.appendChild(loadGeneralProject(getProjects()[0]));
  const generalProject = document.querySelector(".project-item");
  generalProject.classList.add("general");
  toggleActiveItem(document.querySelector(".project-item")); // Set General as initial active project
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

  contentHeader.appendChild(projectName);

  projectContent.appendChild(contentHeader);

  const tasks = project.tasks;

  const taskItemContainer = document.createElement("div");
  taskItemContainer.id = "task-items-container";

  tasks.forEach((task) =>
    taskItemContainer.appendChild(createTaskItem(task, project))
  );

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
  const projectContainer = document.querySelector(".container");
  const projectContent = loadGeneralProject(project);
  projectContainer.appendChild(projectContent);

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent = project.description;

  const editButton = document.createElement("button");
  editButton.classList = "project-edit-button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList = "project-delete-button";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    removeProjectFromSidebar(project);
    removeProjectItem(project);
  });

  const contentHeader = document.getElementById("content-header");
  contentHeader.appendChild(projectDescription);
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
    projectContainer.appendChild(loadGeneralProject(project));
  } else {
    projectContainer.appendChild(loadProject(project));
  }
};

export { createProjectContainer, loadProject, clearContent, changeProject };

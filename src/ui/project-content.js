import { getProjects } from "../controllers/project-controller";
import { toggleActiveItem } from "./sidebar";
import createTaskItem from "./task-item";
import { triggerTaskModal } from "./modal";
import AddIcon from "../assets/add.svg";

const createProjectContainer = () => {
  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";

  console.log(getProjects()[0]);
  projectContainer.appendChild(loadProject(getProjects()[0]));
  toggleActiveItem(document.querySelector(".project-item")); // Set General as initial active project
  return projectContainer;
};

const loadProject = (project) => {
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

  const editButton = document.createElement("button");
  editButton.classList = "project-edit-button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList = "project-delete-button";
  deleteButton.textContent = "Delete";

  contentHeader.appendChild(projectName);
  contentHeader.appendChild(editButton);
  contentHeader.appendChild(projectDescription);
  contentHeader.appendChild(deleteButton);

  projectContent.appendChild(contentHeader);

  const tasks = project.tasks;
  console.log(tasks);

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

const clearContent = () => {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = "";
};

const changeProject = (projectItem, project) => {
  const projectContainer = document.getElementById("project-container");
  clearContent();
  toggleActiveItem(projectItem);
  projectContainer.appendChild(loadProject(project));
};

export { createProjectContainer, loadProject, clearContent, changeProject };

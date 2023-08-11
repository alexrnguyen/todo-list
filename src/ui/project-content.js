import { getProjects } from "../controllers/project-controller";
import { toggleActiveItem } from "./sidebar";

const createProjectContainer = () => {
  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";

  const projectContent = document.createElement("div");

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
  projectName.textContent = project.getName();

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent = project.getDescription();

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

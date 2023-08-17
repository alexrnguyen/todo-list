import { changeProject } from "./project-content";

const createProjectItem = (project) => {
  const projectItem = document.createElement("div");
  projectItem.className = "project-item";

  const projectName = document.createElement("p");
  projectName.className = "project-item-name";
  projectName.textContent = project.name;

  const numTasksContainer = document.createElement("div");
  numTasksContainer.className = "num-tasks-container";

  const numTasks = document.createElement("p");
  numTasks.className = "num-tasks";
  numTasks.textContent = project.numTasks;
  numTasksContainer.appendChild(numTasks);

  projectItem.appendChild(projectName);
  projectItem.appendChild(numTasksContainer);

  projectItem.addEventListener("click", () => {
    changeProject(projectItem, project);
  });

  return projectItem;
};

export default createProjectItem;

import AddIcon from "../assets/add.svg";
import { triggerProjectModal } from "./modal";
import createProjectItem from "./project-item";
import { addProjectItem, getProjects } from "../controllers/project-controller";
import projectFactory from "../models/project";
import { retrieveProjects, updateProjects } from "../controllers/storage";
import taskFactory from "../models/task";

const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const generalItem = projectFactory("General", "What are you working on?", []);

  const projectItemsContainer = document.createElement("div");
  projectItemsContainer.id = "project-items-container";

  let projectsInStorage = retrieveProjects();

  if (projectsInStorage === null) {
    addProjectItem(generalItem.name, generalItem.description, []);
    updateProjects(getProjects());
    projectsInStorage = retrieveProjects();
  } else {
    const generalProject = projectsInStorage[0];
    addProjectItem(
      generalProject.name,
      generalProject.description,
      generalProject.tasks
    );
    initializeTasks(generalProject);
  }

  const projectItemsHeader = document.createElement("p");
  projectItemsHeader.id = "project-items-header";
  projectItemsHeader.textContent = "Projects";
  projectItemsContainer.appendChild(projectItemsHeader);

  const itemsContainerUnderline = document.createElement("hr");
  projectItemsContainer.appendChild(itemsContainerUnderline);

  projectsInStorage.shift();
  const userProjects = projectsInStorage;
  // Add existing projects to container
  for (const project of userProjects) {
    const projectInStorage = addProjectItem(
      project.name,
      project.description,
      project.tasks
    );
    console.log(projectInStorage);
    initializeTasks(projectInStorage);
    projectItemsContainer.appendChild(createProjectItem(projectInStorage));
  }

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-button";
  const addIcon = new Image();
  addIcon.src = AddIcon;
  addProjectButton.appendChild(addIcon);
  addProjectButton.addEventListener("click", () => {
    triggerProjectModal();
  });

  const addProjectText = document.createElement("p");
  addProjectText.textContent = "Add Project";
  addProjectButton.appendChild(addProjectText);

  sidebar.appendChild(createProjectItem(generalItem));
  sidebar.appendChild(projectItemsContainer);
  sidebar.appendChild(addProjectButton);

  return sidebar;
};

const toggleActiveItem = (projectItem) => {
  const allProjects = document.querySelectorAll(".project-item");
  allProjects.forEach((project) => project.classList.remove("active"));
  projectItem.classList.toggle("active");
};

const updateProjectCount = (project, projectAdded) => {
  const index = getProjects().indexOf(project);
  const numTasks =
    document.querySelectorAll(".project-item")[index].lastChild.firstChild;

  if (projectAdded) {
    numTasks.textContent++;
  } else {
    numTasks.textContent--;
  }
};

const updateProjectItem = (project) => {
  const index = getProjects().indexOf(project);
  const projectItemToUpdate = document.querySelectorAll(".project-item")[index];
  const projectItemsContainer = document.getElementById(
    "project-items-container"
  );
  const updatedProjectItem = createProjectItem(project);
  projectItemsContainer.insertBefore(updatedProjectItem, projectItemToUpdate);
  projectItemsContainer.removeChild(projectItemToUpdate);
  return updatedProjectItem;
};

const removeProjectFromSidebar = (project) => {
  const index = getProjects().indexOf(project);
  const projectItemToRemove = document.querySelectorAll(".project-item")[index];
  const projectItemsContainer = document.getElementById(
    "project-items-container"
  );
  projectItemsContainer.removeChild(projectItemToRemove);
};

const initializeTasks = (project) => {
  const tasks = [];
  for (const object in project.tasks) {
    const task = taskFactory(
      object.name,
      object.description,
      object.dueDate,
      object.priority,
      object.status,
      project
    );
    tasks.push(task);
  }
  project.tasks = tasks;
};

export {
  createSidebar,
  toggleActiveItem,
  removeProjectFromSidebar,
  updateProjectCount,
  updateProjectItem,
};

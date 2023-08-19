import AddIcon from "../assets/add.svg";
import { triggerProjectModal } from "./modal";
import createProjectItem from "./project-item";
import { addProjectItem, getProjects } from "../controllers/project-controller";
import projectFactory from "../models/project";
import { retrieveProjects } from "../controllers/storage";

const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const generalItem = projectFactory(
    "General",
    "What do you need to get done?",
    []
  );

  const projectItemsContainer = document.createElement("div");
  projectItemsContainer.id = "project-items-container";

  const projectsInStorage = retrieveProjects();

  if (projectsInStorage === null) {
    addProjectItem(generalItem.name, generalItem.description, []);
  } else {
    const generalProject = projectsInStorage[0];
    addProjectItem(
      generalProject.name,
      generalProject.description,
      generalProject.tasks
    );
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
    addProjectItem(project.name, project.description, project.tasks);
    projectItemsContainer.appendChild(createProjectItem(project));
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

export {
  createSidebar,
  toggleActiveItem,
  removeProjectFromSidebar,
  updateProjectCount,
  updateProjectItem,
};

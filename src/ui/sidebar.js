import AddIcon from "../assets/add.svg";
import { triggerProjectModal } from "./modal";
import createProjectItem from "./project-item";
import { addProjectItem } from "../controllers/project-controller";
import projectFactory from "../models/project";

const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const generalItem = projectFactory("General", "", []);
  addProjectItem("General", "");

  const projectItemsContainer = document.createElement("div");
  projectItemsContainer.id = "project-items-container";

  const projectItemsHeader = document.createElement("p");
  projectItemsHeader.id = "project-items-header";
  projectItemsHeader.textContent = "Projects";
  projectItemsContainer.appendChild(projectItemsHeader);

  const itemsContainerUnderline = document.createElement("hr");
  projectItemsContainer.appendChild(itemsContainerUnderline);

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

export { createSidebar, toggleActiveItem };

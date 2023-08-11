import AddIcon from "../assets/add.svg";
import { triggerProjectModal } from "./modal";
import createProjectItem from "./project-item";
import projectFactory from "../models/project";

const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const generalItem = projectFactory("General", "", []);

  const projectItemsContainer = document.createElement("div");
  projectItemsContainer.id = "project-items-container";
  projectItemsContainer.textContent = "Projects";

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

export default createSidebar;

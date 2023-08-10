import AddIcon from "../assets/add.svg";

const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const generalItem = document.createElement("div");
  generalItem.className = "project-item";
  generalItem.textContent = "General";

  const projectItemsContainer = document.createElement("div");
  projectItemsContainer.id = "project-items-container";
  projectItemsContainer.textContent = "Projects";

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-button";
  const addIcon = new Image();
  addIcon.src = AddIcon;
  addProjectButton.appendChild(addIcon);

  const addProjectText = document.createElement("p");
  addProjectText.textContent = "Add Project";
  addProjectButton.appendChild(addProjectText);

  sidebar.appendChild(generalItem);
  sidebar.appendChild(projectItemsContainer);
  sidebar.appendChild(addProjectButton);

  return sidebar;
};

export default createSidebar;

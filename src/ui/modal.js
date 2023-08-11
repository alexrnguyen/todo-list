import { addProjectItem } from "../controllers/project-controller";
import { loadProject } from "./project-content";
import createProjectItem from "./project-item";
import CloseIcon from "../assets/close.svg";

const createProjectModal = () => {
  const projectModal = document.createElement("div");
  projectModal.id = "project-modal";
  projectModal.classList.add("modal");
  projectModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h1");
  header.className = "form-header";
  header.textContent = "Add a Project";
  headerContainer.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.id = "project-close-button";
  const closeIcon = new Image();
  closeIcon.className = "close-icon";
  closeIcon.src = CloseIcon;

  closeButton.addEventListener("click", () => {
    document.getElementById("project-name").value = "";
    document.getElementById("project-description").value = "";
    toggleModal(projectModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("hidden");

  projectModal.appendChild(headerContainer);
  projectModal.appendChild(createProjectForm());

  document.body.appendChild(projectModal);
  document.body.appendChild(overlay);

  return projectModal;
};

const triggerProjectModal = () => {
  const projectModal = document.getElementById("project-modal");
  toggleModal(projectModal);

  const projectForm = document.getElementById("project-form");
  projectForm.onsubmit = (event) => {
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;
    const newProject = addProjectItem(name, description);

    const projectItemsContainer = document.getElementById(
      "project-items-container"
    );
    projectItemsContainer.appendChild(createProjectItem(newProject));
    loadProject(newProject);
    projectForm.reset();
    toggleModal(projectModal);
    event.preventDefault();
  };
};

const createProjectForm = () => {
  const projectForm = document.createElement("form");
  projectForm.id = "project-form";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "project-name";
  nameInputLabel.textContent = "Project Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "project-name";
  nameInput.id = "project-name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);
  projectForm.appendChild(nameInputContainer);

  // Description
  const descriptionInputContainer = document.createElement("div");
  const descriptionInputLabel = document.createElement("label");
  descriptionInputLabel.for = "project-description";
  descriptionInputLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "project-description";
  descriptionInput.id = "project-description";
  descriptionInput.rows = 10;
  descriptionInput.cols = 50;
  descriptionInput.maxLength = 1000;
  descriptionInput.placeholder = "Type a message...";

  descriptionInputContainer.appendChild(descriptionInputLabel);
  descriptionInputContainer.appendChild(descriptionInput);
  projectForm.appendChild(descriptionInputContainer);

  // Add Project Button
  const addProjectButton = document.createElement("button");
  addProjectButton.type = "submit";
  addProjectButton.className = "submit-button";
  addProjectButton.textContent = "Add Project";
  projectForm.appendChild(addProjectButton);

  return projectForm;
};

const createTaskModal = () => {};

const toggleModal = (modal) => {
  const overlay = document.getElementById("overlay");
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

export { createProjectModal, triggerProjectModal };

import CloseIcon from "../assets/close.svg";
import { updateProject } from "../controllers/project-controller";
import { toggleModal } from "./modal";
import { changeProject, loadProject } from "./project-content";
import { updateProjectItem } from "./sidebar";
const createProjectEditModal = () => {
  const projectEditModal = document.createElement("div");
  projectEditModal.id = "project-edit-modal";
  projectEditModal.classList.add("modal");
  projectEditModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h1");
  header.className = "form-header";
  header.textContent = "Edit Project";
  headerContainer.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.id = "project-close-button";
  const closeIcon = new Image();
  closeIcon.className = "icon";
  closeIcon.src = CloseIcon;

  closeButton.addEventListener("click", () => {
    document.getElementById("project-edit-name").value = "";
    document.getElementById("project-edit-description").value = "";
    toggleModal(projectEditModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  projectEditModal.appendChild(headerContainer);
  projectEditModal.appendChild(createProjectEditForm());

  return projectEditModal;
};

const triggerProjectEditModal = (project) => {
  const projectEditModal = document.getElementById("project-edit-modal");
  document.getElementById("project-edit-name").value = project.name;
  document.getElementById("project-edit-description").value =
    project.description;
  toggleModal(projectEditModal);

  const projectEditForm = document.getElementById("project-edit-form");
  projectEditForm.onsubmit = (event) => {
    const name = document.getElementById("project-edit-name").value;
    const description = document.getElementById(
      "project-edit-description"
    ).value;
    project.name = name;
    project.description = description;

    updateProject(project);
    const updatedProjectItem = updateProjectItem(project);
    changeProject(updatedProjectItem, project);
    projectEditForm.reset();
    toggleModal(projectEditModal);
    event.preventDefault();
  };
};

const createProjectEditForm = () => {
  const projectEditForm = document.createElement("form");
  projectEditForm.id = "project-edit-form";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "project-edit-name";
  nameInputLabel.textContent = "Project Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "project-edit-name";
  nameInput.id = "project-edit-name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);
  projectEditForm.appendChild(nameInputContainer);

  // Description
  const descriptionInputContainer = document.createElement("div");
  const descriptionInputLabel = document.createElement("label");
  descriptionInputLabel.for = "project-edit-description";
  descriptionInputLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "project-edit-description";
  descriptionInput.id = "project-edit-description";
  descriptionInput.rows = 10;
  descriptionInput.cols = 50;
  descriptionInput.maxLength = 1000;
  descriptionInput.placeholder = "Type a message...";

  descriptionInputContainer.appendChild(descriptionInputLabel);
  descriptionInputContainer.appendChild(descriptionInput);
  projectEditForm.appendChild(descriptionInputContainer);

  // Add Project Button
  const editProjectButton = document.createElement("button");
  editProjectButton.type = "submit";
  editProjectButton.className = "submit-button";
  editProjectButton.textContent = "Edit Project";
  projectEditForm.appendChild(editProjectButton);

  return projectEditForm;
};

const createTaskEditModal = () => {};

const triggerTaskEditModal = () => {};

export {
  createProjectEditModal,
  triggerProjectEditModal,
  createTaskEditModal,
  triggerTaskEditModal,
};

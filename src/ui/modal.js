import { addProjectItem } from "../controllers/project-controller";
import { loadProject } from "./project-content";
import createProjectItem from "./project-item";
import createTaskItem from "./task-item";
import CloseIcon from "../assets/close.svg";
import { addTaskItem } from "../controllers/task-controller";
import { updateProjectCount } from "./sidebar";

// Project Modal
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
  closeIcon.className = "icon";
  closeIcon.src = CloseIcon;

  closeButton.addEventListener("click", () => {
    document.getElementById("project-name").value = "";
    document.getElementById("project-description").value = "";
    toggleModal(projectModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  projectModal.appendChild(headerContainer);
  projectModal.appendChild(createProjectForm());

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

// Overlay
const createOverlay = () => {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("hidden");
  return overlay;
};

// Task Modal
const createTaskModal = () => {
  const taskModal = document.createElement("div");
  taskModal.id = "task-modal";
  taskModal.classList.add("modal");
  taskModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h1");
  header.className = "form-header";
  header.textContent = "Add a Task";
  headerContainer.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.id = "task-close-button";
  const closeIcon = new Image();
  closeIcon.className = "icon";
  closeIcon.src = CloseIcon;

  closeButton.addEventListener("click", () => {
    document.getElementById("task-name").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-due-date").value = "";
    document.getElementById("task-priority").value = "";
    toggleModal(taskModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  taskModal.appendChild(headerContainer);
  taskModal.appendChild(createTaskForm());

  return taskModal;
};

const triggerTaskModal = (project) => {
  const taskModal = document.getElementById("task-modal");
  toggleModal(taskModal);

  const taskForm = document.getElementById("task-form");
  taskForm.onsubmit = (event) => {
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const dueDate = new Date(document.getElementById("task-due-date").value);
    const priority = document.getElementById("task-priority").value;
    const newTask = addTaskItem(name, description, dueDate, priority, project);

    const taskItemsContainer = document.getElementById("task-items-container");
    const addTaskButton = document.getElementById("add-task-button");
    taskItemsContainer.insertBefore(
      createTaskItem(newTask, project),
      addTaskButton
    );
    updateProjectCount(project, true);
    taskForm.reset();
    toggleModal(taskModal);
    event.preventDefault();
  };
};

const toggleModal = (modal) => {
  const overlay = document.getElementById("overlay");
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

const createTaskForm = () => {
  const taskForm = document.createElement("form");
  taskForm.id = "task-form";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "task-name";
  nameInputLabel.textContent = "Task Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "task-name";
  nameInput.id = "task-name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);
  taskForm.appendChild(nameInputContainer);

  // Description
  const descriptionInputContainer = document.createElement("div");
  const descriptionInputLabel = document.createElement("label");
  descriptionInputLabel.for = "task-description";
  descriptionInputLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "task-description";
  descriptionInput.id = "task-description";
  descriptionInput.rows = 10;
  descriptionInput.cols = 50;
  descriptionInput.maxLength = 1000;
  descriptionInput.placeholder = "Type a message...";

  descriptionInputContainer.appendChild(descriptionInputLabel);
  descriptionInputContainer.appendChild(descriptionInput);
  taskForm.appendChild(descriptionInputContainer);

  // Due Date
  const dateInputContainer = document.createElement("div");
  const dateInputLabel = document.createElement("label");
  dateInputLabel.for = "task-due-date";
  dateInputLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "task-due-date";
  dueDateInput.id = "task-due-date";
  dueDateInput.required = true;

  // Don't allow users to input past dates
  dueDateInput.min = new Date()
    .toISOString()
    .replace(/T.*/, "")
    .split("-")
    .join("-");

  dateInputContainer.appendChild(dateInputLabel);
  dateInputContainer.appendChild(dueDateInput);
  taskForm.appendChild(dateInputContainer);

  // Priority
  const priorityInputContainer = document.createElement("div");
  const priorityInputLabel = document.createElement("label");
  priorityInputLabel.for = "task-priority";
  priorityInputLabel.textContent = "Priority";

  const priorityInput = document.createElement("select");
  priorityInput.name = "task-priority";
  priorityInput.id = "task-priority";
  priorityInput.required = true;

  priorityInput.add(addPlaceholder());

  const options = ["Low", "Medium", "High"];
  for (let i = 0; i < 3; i++) {
    const option = document.createElement("option");
    option.textContent = options[i];
    priorityInput.add(option);
  }

  priorityInputContainer.appendChild(priorityInputLabel);
  priorityInputContainer.appendChild(priorityInput);
  taskForm.appendChild(priorityInputContainer);

  // Add Task Button
  const addTaskButton = document.createElement("button");
  addTaskButton.type = "submit";
  addTaskButton.className = "submit-button";
  addTaskButton.textContent = "Add Task";
  taskForm.appendChild(addTaskButton);

  return taskForm;
};

const addPlaceholder = () => {
  const placeholder = document.createElement("option");
  placeholder.textContent = "Priority";
  placeholder.selected = true;
  return placeholder;
};

export {
  createProjectModal,
  triggerProjectModal,
  createOverlay,
  createTaskModal,
  triggerTaskModal,
  toggleModal,
};

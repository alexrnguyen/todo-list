import createHeader from "./ui/header";
import { createSidebar } from "./ui/sidebar";
import { createProjectContainer } from "./ui/project-content";
import { createProjectModal, createTaskModal, createOverlay } from "./ui/modal";
import "./css/style.css";
import { createProjectEditModal, createTaskEditModal } from "./ui/edit-modal";

const initializeWebpage = () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createSidebar());
  container.appendChild(createProjectContainer());
  document.body.appendChild(createOverlay());
  document.body.appendChild(createProjectModal());
  document.body.appendChild(createTaskModal());
  document.body.appendChild(createProjectEditModal());
  document.body.appendChild(createTaskEditModal());

  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
    container.classList.toggle("no-sidebar");
  });
};

initializeWebpage();

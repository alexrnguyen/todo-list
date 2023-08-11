import createHeader from "./ui/header";
import { createSidebar } from "./ui/sidebar";
import { createProjectContainer } from "./ui/project-content";
import { createProjectModal } from "./ui/modal";
import "./css/style.css";

const initializeWebpage = () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createSidebar());
  container.appendChild(createProjectContainer());
  document.body.appendChild(createProjectModal());
};

initializeWebpage();

import createHeader from "./ui/header";
import createSidebar from "./ui/sidebar";
import { createProjectContent } from "./ui/project-content";
import { createProjectModal } from "./ui/modal";
import "./css/style.css";

const initializeWebpage = () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createSidebar());
  container.appendChild(createProjectContent());
  document.body.appendChild(createProjectModal());
};

initializeWebpage();

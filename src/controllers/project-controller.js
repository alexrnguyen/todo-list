import projectFactory from "../models/project";
import { retrieveProjects } from "./storage";

let projects = [];

const getProjects = () => {
  return projects;
};

const addProjectItem = (name, description, tasks = []) => {
  const newProject = projectFactory(name, description, tasks);
  projects.push(newProject);
  return newProject;
};

const updateProject = (project) => {
  const index = projects.indexOf(project);
  projects[index] = project;
};

const removeProjectItem = (project) => {
  const index = projects.indexOf(project);
  projects.splice(index, 1);
};

export { addProjectItem, getProjects, updateProject, removeProjectItem };

import projectFactory from "../models/project";

let projects = [];

const getProjects = () => {
  return projects;
};

const addProjectItem = (name, description) => {
  const newProject = projectFactory(name, description, []);
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

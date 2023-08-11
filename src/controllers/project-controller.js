import projectFactory from "../models/project";

let projects = [];

const getProjects = () => {
  return projects;
};

const addProjectItem = (name, description) => {
  const newProject = projectFactory(name, description, []);
  projects.push(newProject);
  console.log(projects);
  return newProject;
};

const removeProjectItem = (project) => {
  const index = projects.indexOf(project);
  projects.splice(index, 1);
};

export { addProjectItem, getProjects, removeProjectItem };

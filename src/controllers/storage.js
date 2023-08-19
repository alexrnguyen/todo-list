const retrieveProjects = () => {
  return JSON.parse(localStorage.getItem("projects"));
};

const updateProject = (project) => {};

const updateProjects = (projects) => {
  console.log(projects);
  localStorage.setItem("projects", JSON.stringify(projects));
};

const deleteProject = (project) => {};

export { retrieveProjects, updateProjects };

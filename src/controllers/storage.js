const retrieveProjects = () => {
  return JSON.parse(localStorage.getItem("projects"));
};

const updateProjects = (projects) => {
  console.log(projects);
  localStorage.setItem("projects", JSON.stringify(projects));
};

export { retrieveProjects, updateProjects };

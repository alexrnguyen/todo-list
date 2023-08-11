const projectFactory = (name, description, tasks) => {
  function addTask(newTask) {
    tasks.push(newTask);
  }

  function removeTask(taskToRemove) {
    const indexOfTask = tasks.indexOf(taskToRemove);
    tasks.splice(indexOfTask, 1);
  }

  function getNumTasks() {
    return tasks.length;
  }

  function getName() {
    return name;
  }

  function getDescription() {
    return description;
  }

  function getTasks() {
    return tasks;
  }
  return {
    addTask,
    removeTask,
    getNumTasks,
    getName,
    getDescription,
    getTasks,
  };
};

export default projectFactory;

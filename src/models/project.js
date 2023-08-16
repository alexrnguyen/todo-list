const projectFactory = (name, description, tasks) => {
  function addTask(newTask) {
    tasks.push(newTask);
  }

  function removeTask(taskToRemove) {
    const indexOfTask = tasks.indexOf(taskToRemove);
    tasks.splice(indexOfTask, 1);
  }

  return {
    addTask,
    removeTask,
    get name() {
      return name;
    },
    get numTasks() {
      return tasks.length;
    },
    get description() {
      return description;
    },
    get tasks() {
      return tasks;
    },
  };
};

export default projectFactory;

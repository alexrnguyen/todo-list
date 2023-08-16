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
    set name(newName) {
      name = newName;
    },
    get numTasks() {
      return tasks.length;
    },
    get description() {
      return description;
    },
    set description(newDescription) {
      description = newDescription;
    },
    get tasks() {
      return tasks;
    },
  };
};

export default projectFactory;

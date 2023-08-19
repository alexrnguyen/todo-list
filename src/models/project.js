const projectFactory = (name, description, tasks) => {
  function addTask(newTask) {
    tasks.push(newTask);
  }

  function removeTask(taskToRemove) {
    const indexOfTask = tasks.indexOf(taskToRemove);
    tasks.splice(indexOfTask, 1);
  }

  function updateTask(updatedTask) {
    const indexOfTask = tasks.indexOf(updatedTask);
    tasks[indexOfTask] = updatedTask;
  }

  return {
    addTask,
    removeTask,
    updateTask,
    get name() {
      return name;
    },
    set name(newName) {
      name = newName;
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
    set tasks(newTasks) {
      tasks = newTasks;
    },
  };
};

export default projectFactory;

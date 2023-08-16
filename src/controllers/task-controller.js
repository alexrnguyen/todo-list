import taskFactory from "../models/task";

const addTaskItem = (name, description, dueDate, priority, project) => {
  const newTask = taskFactory(name, description, dueDate, priority, false);
  project.addTask(newTask);
  return newTask;
};

export { addTaskItem };

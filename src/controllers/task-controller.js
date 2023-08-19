import taskFactory from "../models/task";

const addTaskItem = (name, description, dueDate, priority, status, project) => {
  const newTask = taskFactory(name, description, dueDate, priority, status);
  project.addTask(newTask);
  return newTask;
};

export { addTaskItem };

const taskFactory = (name, description, dueDate, priority, status) => {
  function changeStatus() {
    status = !status;
  }

  return {
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
    get dueDate() {
      return dueDate;
    },
    set dueDate(newDueDate) {
      dueDate = newDueDate;
    },
    get priority() {
      return priority;
    },
    set priority(newPriority) {
      priority = newPriority;
    },
    get status() {
      return status;
    },
    changeStatus,
  };
};

export default taskFactory;

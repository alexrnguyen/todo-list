const taskFactory = (name, description, dueDate, priority, status) => {
  function changeStatus() {
    status = !status;
  }

  return {
    get name() {
      return name;
    },
    get description() {
      return description;
    },
    get dueDate() {
      return dueDate;
    },
    get priority() {
      return priority;
    },
    get status() {
      return status;
    },
    changeStatus,
  };
};

export default taskFactory;

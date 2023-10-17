const PendingTasks = (props) => {
  // STEP 5.1: Filter pending tasks using filter()
  const pendingTasks = props.tasks.filter((task) => task.status === "pending");

  // STEP 5.4: Define the `deleteTaskHandler` here
  const deleteTaskHandler = (id) => {
    props.onDeleteTask(id);
  };

  // STEP 7: Define the `doneTaskHandler` here

  return (
    <div>
      <h2>Pending Tasks</h2>
      {/* STEP 5.2: Display pending tasks */}
      {pendingTasks.map((task) => {
        return (
          <div>
            <li>{task.task_name}</li>
            <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
          </div>
        );
      })}

      {/* STEP 5.7: Using what we've learned about conditional rendering, conditionally render a list of pending tasks or a message indicating that there are no pending tasks */}
      {/* {pendingTasks.length > 0 ? (
        pendingTasks.map((task) => {
          return (
            <div key={task.id}>
              <li>{task.task_name}</li>
              <button onClick={() => doneTaskHandler(task.id)}>Done</button>
              <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
            </div>
          );
        })
      ) : (
        <h4 style={{ color: "red" }}>No Pending tasks</h4>
      )} */}
    </div>
  );
};

export default PendingTasks;

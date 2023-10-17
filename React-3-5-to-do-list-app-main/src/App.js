// STEP 1.2 import useState from React
import React, { useState } from "react";
// STEP 1.1 import SAMPLE_TASKS json file
import SAMPLE_TASKS from "./data/sample-tasks.json";
// dont forget to import components here
import AddTask from "./components/AddTask";
import PendingTasks from "./components/PendingTasks";
import DoneTasks from "./components/DoneTasks";
import { MyContext } from "./components/MyContext";

import "./App.css";

function App() {
  // STEP 1: Initialize `tasks` with SAMPLE_TASKS that is imported from the sample-tasks.json file.
  const [tasks, setTasks] = useState(SAMPLE_TASKS);

  // STEP 4.6: Define a function called `addTaskHandler` that  adds a new task to the list of tasks by updating the state of the tasks array using the previous state and the new task object.

  const addTaskHandler = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // STEP 5.6: Define a function called `deleteTaskHandler` that takes in the taskId as a parameter, and updates the list of tasks by filtering out the task with the matching taskId
  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // STEP 7.1: Define a function called doneTaskHandler that updates the status of a task to "done" by using the setTasks function and mapping through the previous state to find the task with the matching taskId, and returning a new object with the updated status value.

  return (
    <div className="App">
      <header className="App-header">
        {/* STEP 2: Let's try to render all the task list here by applying the map() method */}

        {tasks.map((task) => {
          return <div key={task.id}>{task.task_name}</div>;
        })}

        {/* STEP 3: Create a component <AddTask /> to make a form */}
        <AddTask onAddTask={addTaskHandler} />
        {/* STEP 4.7: Pass the addTaskHandler as a prop */}

        {/* STEP 5: Create a component <PendingTasks /> to make a form and pass `task` as a prop */}
        <PendingTasks tasks={tasks} onDeleteTask={deleteTaskHandler} />

        {/* STEP 6: Refactor this to use useContext() Hook, create MyContext File and create <DoneTasks /> component */}
        {/* <MyContext.Provider value={{ tasks }}>
          <AddTask onAddTask={addTaskHandler} />
          <PendingTasks
            tasks={tasks}
            onDeleteTask={deleteTaskHandler}
            onDoneTask={doneTaskHandler}
          />
          <DoneTasks />
        </MyContext.Provider> */}
      </header>
    </div>
  );
}

export default App;

// const doneTaskHandler = (taskId) => {
//   setTasks((prevTasks) =>
//     prevTasks.map((task) =>
//       task.id === taskId ? { ...task, status: "done" } : task
//     )
//   );
// };



{
  /* <MyContext.Provider value={{ tasks }}>
          <AddTask onAddTask={addTaskHandler} />
          <PendingTasks
            tasks={tasks}
            onDeleteTask={deleteTaskHandler}
            onDoneTask={doneTaskHandler}
          />
          <DoneTasks />
        </MyContext.Provider> */
}

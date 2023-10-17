import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

const AddTask = props => {

  // STEP 4.2 Create a useState() hook to manage the task state variable (dont forget to import useState)
  const [task, setTask] = useState('');
  
  // STEP 4: Make a `addNewTaskHandler` function that will handle adding of new tasks

  const addNewTaskHandler = e => {
    e.preventDefault();

    const newTask = {
      task_name: task,
      status: 'pending',
      id: uuidv4()
    }

    props.onAddTask(newTask);

    resetInputFields();

  }

  // STEP 4.3: Inside the addNewTaskHandler function, create a new object called `newTask` to store the data of the new task. (use uuid library)

  // STEP 4.4: Pass the `newTask` object to the onAddTask function that was received as a prop from the parent component

  // STEP 4.5: Define a function called resetInputFields that sets the task state to an empty string to avoid manually clearing the input field again and again

  const resetInputFields = () => {
    setTask('');
  }

  // STEP 4.1 Create an onChange event handler `changeTaskHandler`

  const changeTaskHandler = e => {
    setTask(e.target.value);
  }
    

  return (
    <div>
      {/* STEP 3.1: Create a <form>, <input> with a <button> */}
      <form onSubmit={addNewTaskHandler}>
        <input
          required
          id='task'
          name='task'
          value={task}
          placeholder='Add task here'
          onChange={changeTaskHandler}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;

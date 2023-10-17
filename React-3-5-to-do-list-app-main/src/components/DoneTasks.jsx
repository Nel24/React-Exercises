import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const DoneTasks = () => {
  // STEP 6.1: Define and destructure the tasks variable from the MyContext using useContext hook:
  const { tasks } = useContext(MyContext);

  // STEP 6.2: Filter done tasks
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div>
      <h2>Done Tasks</h2>
      {/* STEP 6.3: Disply Done Tasks Here */}

      {/* STEP 6.4: Do a conditional rendering, like we did in <PendingTasks /> component */}
      { doneTasks.length > 0 ? (
        doneTasks.map(task => {
          return (
            <div>
              <p>{task.task_name}</p>
            </div>
          )
        })
        ) : (
          <div>Hey, lets clear out that list of tasks!</div>
        )
      }
    </div>
  );
}

export default DoneTasks;

import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Jan 15th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Cat Appointment",
      day: "Feb 24th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "House Appointment",
      day: "March 14th at 2:30pm",
      reminder: true,
    },
  ]);
  const name = "Evelyn";

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task function
  const deleteTask = (id) => {
    // console.log("delete", id); shown in Task.js
    setTasks(tasks.filter((task) => task.id !== id)); // We do not want to show the actual id thats being pass as we are deleting it
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* shorthand of doing tenary && with not if */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task to Do" // this will show when all the task is being deleted
      )}
    </div>
  );
}

export default App;

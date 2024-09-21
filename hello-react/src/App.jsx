import React from "react";
import TaskCard from "./TaskCard";

function App() {
  const pendingTasks = [
    { id: 1, title: "Task 1", dueDate: "2024-09-30", assigneeName: "John" },
    { id: 2, title: "Task 2", dueDate: "2024-10-05", assigneeName: "Jane" },
  ];

  const doneTasks = [
    { id: 3, title: "Task 3", completedAtDate: "2024-09-20", assigneeName: "Alice" },
    { id: 4, title: "Task 4", completedAtDate: "2024-09-21", assigneeName: "Bob" },
  ];

  return (
    <div>
      <h2>Pending Tasks</h2>
      {pendingTasks.map((task) => (
        <TaskCard key={task.id} title={task.title} dueDate={task.dueDate} assigneeName={task.assigneeName} />
      ))}

      <h2>Done Tasks</h2>
      {doneTasks.map((task) => (
        <TaskCard key={task.id} title={task.title} completedAtDate={task.completedAtDate} assigneeName={task.assigneeName} />
      ))}
    </div>
  );
}

export default App;

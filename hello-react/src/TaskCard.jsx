import React from "react";
import "./TaskCard.css"; // Add your Tailwind classes in this CSS or in your index.css

const TaskCard = ({ title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {dueDate && (
        <p className="text-sm text-gray-500">Due: {dueDate}</p>
      )}
      {completedAtDate && (
        <p className="text-sm text-green-500">Completed on: {completedAtDate}</p>
      )}
      <p className="text-sm text-gray-500">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;

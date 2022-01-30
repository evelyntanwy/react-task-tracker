import { FaTimes } from "react-icons/fa"; // X icon

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "brown", cursor: "pointer" }}
          onClick={() => onDelete(task.id)} // this will show which id its being deleted
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
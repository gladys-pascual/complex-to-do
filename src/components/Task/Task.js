import "./Task.scss";
import PropTypes from "prop-types";

const Task = ({ task, handleDeleteTask, handleIsTaskDone }) => {
  return (
    <div className="task">
      <div className="checkbox-and-task">
        <button
          className="is-task-done"
          onClick={() => handleIsTaskDone(task.id)}
        >
          <i className="far fa-square">
            <span className="sr-only">Checkbox</span>
          </i>
        </button>
        <p className={task.isDone ? "task-done task-text" : "task-text"}>
          {task.label}
        </p>
      </div>
      <div className="edit-delete-button">
        <button className="edit-task">
          <i className="fas fa-edit">
            <span className="sr-only">Edit</span>
          </i>
        </button>
        <button
          className="delete-task"
          onClick={() => handleDeleteTask(task.id)}
        >
          {" "}
          ✖
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleIsTaskDone: PropTypes.func.isRequired,
};
export default Task;

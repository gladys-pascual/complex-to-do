import "./Task.scss";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <div className="task">
      <div className="checkbox-and-task">
        <button className="is-task-done">
          <i className="far fa-square">
            <span className="sr-only">Checkbox</span>
          </i>
        </button>
        <p className="task-text"> {task.label}</p>
      </div>
      <div className="edit-delete-button">
        <button className="edit-task">
          <i className="fas fa-edit">
            <span className="sr-only">Edit</span>
          </i>
        </button>
        <button className="delete-task"> ✖</button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};
export default Task;

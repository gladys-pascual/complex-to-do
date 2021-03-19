import "./Task.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";
import EditTask from "../EditTask/EditTask";

const Task = ({
  task,
  handleDeleteTask,
  handleIsTaskDone,
  handleEditTask,
  disableEdit,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditSubmit = (newTaskLabel) => {
    setIsEditMode(false);
    handleEditTask(newTaskLabel);
  };

  return (
    <div className="task">
      <div className="checkbox-and-task">
        <button
          className="is-task-done"
          onClick={() => handleIsTaskDone(task.id)}
        >
          <i className={task.isDone ? "far fa-check-square" : "far fa-square"}>
            <span className="sr-only">Checkbox</span>
          </i>
        </button>
        {isEditMode ? (
          <EditTask defaultValue={task.label} onEditTask={handleEditSubmit} />
        ) : (
          <p className={task.isDone ? "task-done task-text" : "task-text"}>
            {task.label}
          </p>
        )}
      </div>
      <div className="edit-delete-button">
        {!disableEdit && (
          <button
            className="edit-task"
            onClick={() => setIsEditMode((prev) => !prev)}
          >
            <i className="fas fa-edit">
              <span className="sr-only">Edit</span>
            </i>
          </button>
        )}
        <button
          className="delete-task"
          onClick={() => handleDeleteTask(task.id)}
        >
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
  handleEditTask: PropTypes.func.isRequired,
  disableEdit: PropTypes.bool,
};
export default Task;

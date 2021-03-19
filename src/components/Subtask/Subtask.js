import Task from "../Task/Task";
import "./Subtask.scss";
import PropTypes from "prop-types";

const Subtask = ({ subtask, handleDeleteSubtask, handleIsSubtaskDone }) => {
  console.log(subtask);
  return (
    <div className="subtask">
      <Task
        task={subtask}
        handleDeleteTask={handleDeleteSubtask}
        handleIsTaskDone={handleIsSubtaskDone}
      />
    </div>
  );
};

Subtask.propTypes = {
  subtask: PropTypes.object.isRequired,
  handleDeleteSubtask: PropTypes.func.isRequired,
  handleIsSubtaskDone: PropTypes.func.isRequired,
};

export default Subtask;

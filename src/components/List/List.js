import "./List.scss";
import PropTypes from "prop-types";
import Task from "../Task/Task";
import CreateTask from "../CreateTask/CreateTask";
import CreateSubtask from "../CreateSubtask/CreateSubtask";
import React from "react";
import Subtask from "../Subtask/Subtask";

const List = ({ list, handleDeleteList, handleUpdateList }) => {
  const { title, id } = list;

  // Adding new task to list
  const onSubmitTask = (task) => {
    const idGenerator = Math.floor(Math.random() * 100);
    const updatedTasks = [
      ...list.tasks,
      {
        label: task.taskLabel,
        isDone: false,
        id: `task-${idGenerator}`,
      },
    ];

    handleUpdateList({
      ...list,
      tasks: updatedTasks,
    });
  };

  //Delete task
  const handleDeleteTask = (id) => {
    const filteredTasks = list.tasks.filter((task) => task.id !== id);
    const filteredSubtask = list.subtasks.filter(
      (subtask) => subtask.taskId !== id
    );
    handleUpdateList({
      ...list,
      tasks: filteredTasks,
      subtasks: filteredSubtask,
    });
  };

  //Delete subtask
  const handleDeleteSubtask = (id) => {
    const filteredSubtask = list.subtasks.filter(
      (subtask) => subtask.id !== id
    );
    handleUpdateList({
      ...list,
      subtasks: filteredSubtask,
    });
  };

  //Is task done?
  const handleIsTaskDone = (id) => {
    const selectedTask = list.tasks.find((task) => task.id === id);

    let updatedSubtasks = list.subtasks;
    if (!selectedTask.isDone) {
      updatedSubtasks = list.subtasks.map((subtask) => {
        return subtask.taskId === id ? { ...subtask, isDone: true } : subtask;
      });
    }

    const updatedTasks = list.tasks.map((task) => {
      return task.id === id ? { ...task, isDone: !task.isDone } : task;
    });

    handleUpdateList({
      ...list,
      tasks: updatedTasks,
      subtasks: updatedSubtasks,
    });
  };

  //Is subtask done?
  const handleIsSubtaskDone = (id) => {
    const updatedSubtask = list.subtasks.map((subtask) => {
      return subtask.id === id
        ? { ...subtask, isDone: !subtask.isDone }
        : subtask;
    });
    handleUpdateList({
      ...list,
      subtasks: updatedSubtask,
    });
  };

  // Update task label
  const handleEditTaskLabel = (newTaskLabel, taskId) => {
    const updatedTasks = list.tasks.map((task) => {
      return task.id === taskId ? { ...task, label: newTaskLabel } : task;
    });

    handleUpdateList({
      ...list,
      tasks: updatedTasks,
    });
  };

  // Adding new subtasks
  const onSubmitSubtask = (subtask, taskId) => {
    const idGenerator = Math.floor(Math.random() * 100);
    const updatedSubtasks = [
      ...list.subtasks,
      {
        label: subtask.subtaskLabel,
        isDone: false,
        id: `subtask-${idGenerator}`,
        taskId: taskId,
      },
    ];

    handleUpdateList({
      ...list,
      subtasks: updatedSubtasks,
    });
  };

  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="title-and-delete-list">
          <h1 className="list-title">{title}</h1>
          <div className="delete-list-wrapper">
            <button
              className="delete-list"
              onClick={() => handleDeleteList(id)}
            >
              ✖
            </button>
          </div>
        </div>

        {list.tasks.length > 0 &&
          list.tasks.map((task) => (
            <React.Fragment key={task.id}>
              <Task
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleIsTaskDone={handleIsTaskDone}
                handleEditTask={(newTaskLabel) =>
                  handleEditTaskLabel(newTaskLabel, task.id)
                }
              />

              {list.subtasks
                .filter((subtask) => subtask.taskId === task.id)
                .map((subtask) => (
                  <Subtask
                    subtask={subtask}
                    key={subtask.id}
                    handleDeleteSubtask={handleDeleteSubtask}
                    handleIsSubtaskDone={handleIsSubtaskDone}
                  />
                ))}

              <CreateSubtask
                onSubmitSubtask={(subtask) => onSubmitSubtask(subtask, task.id)}
              />
            </React.Fragment>
          ))}
        <CreateTask onSubmitTask={onSubmitTask} />
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
  handleUpdateList: PropTypes.func.isRequired,
};

export default List;

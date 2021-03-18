import "./List.scss";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const List = ({ list, handleDeleteList, handleUpdateList }) => {
  const { title, id } = list;

  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    mode: "onBlur",
  });

  //Resets the input (from react-hook-form)
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const idGenerator = Math.floor(Math.random() * 100);

  const onSubmitTask = (task) => {
    const updatedTasks = [
      ...list.tasks,
      {
        label: task.taskTitle,
        isDone: false,
        id: `task-${idGenerator}`,
      },
    ];

    handleUpdateList({
      ...list,
      tasks: updatedTasks,
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

        <div className="create-task-wrapper">
          <form className="create-task" onSubmit={handleSubmit(onSubmitTask)}>
            <input
              id="taskTitle"
              name="taskTitle"
              aria-invalid={errors.taskTitle ? "true" : "false"}
              ref={register({
                required: "This field is required to create a task.",
                minLength: {
                  value: 2,
                  message: "Minimum length is 2 characters.",
                },
              })}
              type="text"
              className="task-title"
              placeholder="Enter your task..."
            />
            <div className="error-message-container">
              <p
                className={
                  errors.listTitle
                    ? "error-message"
                    : "error-message-hidden error-message"
                }
                role="alert"
              >
                {errors.listTitle && errors.listTitle.message}
              </p>
            </div>
          </form>
        </div>
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

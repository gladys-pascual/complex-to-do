import { useForm } from "react-hook-form";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "./CreateTask.scss";

const CreateTask = ({ onSubmitTask }) => {
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

  return (
    <div className="create-task-wrapper">
      <form className="create-task" onSubmit={handleSubmit(onSubmitTask)}>
        <input
          id="taskLabel"
          name="taskLabel"
          aria-invalid={errors.taskLabel ? "true" : "false"}
          ref={register({
            required: "This field is required to create a task.",
            minLength: {
              value: 1,
            },
          })}
          type="text"
          className="task-title"
          placeholder="Enter a task..."
        />
      </form>
    </div>
  );
};

CreateTask.propTypes = {
  onSubmitTask: PropTypes.func.isRequired,
};

export default CreateTask;

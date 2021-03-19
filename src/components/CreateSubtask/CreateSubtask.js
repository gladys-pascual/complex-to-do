import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./CreateSubtask.scss";

const CreateSubtask = ({ onSubmitSubtask }) => {
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
    <div className="create-subtask-wrapper">
      <form className="create-subtask" onSubmit={handleSubmit(onSubmitSubtask)}>
        <input
          id="subtaskLabel"
          name="subtaskLabel"
          aria-invalid={errors.subtaskLabel ? "true" : "false"}
          ref={register({
            required: "This field is required to create a subtask.",
            minLength: {
              value: 1,
              message: "Minimum length is 1 character.",
            },
          })}
          type="text"
          className="subtask-label"
          placeholder="Enter a subtask..."
        />
      </form>
    </div>
  );
};

CreateSubtask.propTypes = {
  onSubmitSubtask: PropTypes.func.isRequired,
};

export default CreateSubtask;

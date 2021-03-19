import { useForm } from "react-hook-form";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "./EditTask.scss";

const EditTask = ({ defaultValue, onEditTask }) => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      editLabel: defaultValue,
    },
  });

  //Resets the input (from react-hook-form)
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="edit-task-wrapper">
      <form
        className="edit-task"
        onSubmit={handleSubmit((formDataObject) =>
          onEditTask(formDataObject.editLabel)
        )}
      >
        <input
          id="editLabel"
          name="editLabel"
          aria-invalid={errors.editLabel ? "true" : "false"}
          ref={register({
            required: "This field is required to create a task.",
            minLength: {
              value: 1,
            },
          })}
          type="text"
          className="edit"
          // placeholder="Enter a task..."
        />
      </form>
    </div>
  );
};

EditTask.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

export default EditTask;

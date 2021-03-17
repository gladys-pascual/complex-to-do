import "./CreateList.scss";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const CreateList = ({ handleCreateList }) => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    mode: "onBlur",
  });
  const [submittedData, setSubmittedData] = useState({});

  const onSubmitList = (data) => {
    handleCreateList(data.listTitle);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData });
    }
  }, [isSubmitSuccessful, submittedData, reset]);

  return (
    <div className="create-list-wrapper">
      <form className="create-list" onSubmit={handleSubmit(onSubmitList)}>
        <input
          id="listTitle"
          name="listTitle"
          aria-invalid={errors.listTitle ? "true" : "false"}
          ref={register({
            required: "This is required.",
            minLength: {
              value: 2,
              message: "Minimum length is 2 characters.",
            },
          })}
          type="text"
          className="list-input-title"
          placeholder="List title..."
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
        <div className="create-list-wrapper">
          <button type="submit" className="create-list">
            <p className="create-list-text">Create List</p>
          </button>
        </div>
      </form>
    </div>
  );
};

CreateList.propTypes = {
  handleCreateList: PropTypes.func.isRequired,
};

export default CreateList;

import "./CreateList.scss";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const CreateList = ({ handleCreateList, closeCreateListModal }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmitList = (data) => {
    handleCreateList(data.listTitle);
  };

  return (
    <div>
      <form className="create-list" onSubmit={handleSubmit(onSubmitList)}>
        <div className="close-list-wrapper">
          {/* <h1>Create a list</h1> */}
          <button className="close-list" onClick={closeCreateListModal}>
            {" "}
            ✖{" "}
          </button>
        </div>
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
        <button type="submit" className="create-list">
          Create List
        </button>
        {/* <input type="submit" className="create-list" /> */}
      </form>
    </div>
  );
};

CreateList.propTypes = {
  handleCreateList: PropTypes.func.isRequired,
  closeCreateListModal: PropTypes.func.isRequired,
};

export default CreateList;

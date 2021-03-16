import "./CreateList.scss";

const CreateList = () => {
  return (
    <section className="create-list-wrapper">
      <div className="create-list">
        <input
          className="list-input-title"
          placeholder="Enter a title for this list..."
        ></input>
        <button className="create-list">Create List</button>
      </div>
    </section>
  );
};

export default CreateList;

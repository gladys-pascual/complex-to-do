import "./List.scss";
import PropTypes from "prop-types";

const List = ({ list, handleDeleteList }) => {
  const { title, id } = list;

  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="delete-list-wrapper">
          <button className="delete-list" onClick={() => handleDeleteList(id)}>
            {" "}
            ✖{" "}
          </button>
        </div>
        <h1 className="list-title">{title}</h1>
        <p>tasks...</p>
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
};

export default List;

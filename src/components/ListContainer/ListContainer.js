import List from "../List/List";
import "./ListContainer.scss";
import PropTypes from "prop-types";
import NoNotes from "../NoNotes/NoNotes";

const ListContainer = ({ lists, handleDeleteList }) => {
  console.log(lists);
  return (
    <section className="list-container-wrapper">
      <div className="list-container">
        {lists.length > 0 ? (
          lists.map((list) => (
            <List
              list={list}
              key={list.id}
              handleDeleteList={handleDeleteList}
            />
          ))
        ) : (
          <NoNotes />
        )}
      </div>
    </section>
  );
};

ListContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
};

export default ListContainer;

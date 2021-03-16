import Header from "../../components/Header/Header";
import PropTypes from "prop-types";

const ToDo = ({ openCreateListModal }) => {
  return (
    <section>
      <Header openCreateListModal={openCreateListModal} />
    </section>
  );
};

ToDo.propTypes = {
  openCreateListModal: PropTypes.func.isRequired,
};

export default ToDo;

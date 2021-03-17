import Header from "../../components/Header/Header";
import React, { useState } from "react";
import Modal from "react-modal";
import CreateList from "../../components/CreateList/CreateList";

const ToDo = () => {
  const [createListModalIsOpen, setCreateListModalIsOpen] = useState(false);
  const [lists, setLists] = useState([
    {
      id: "",
      title: "",
      tasks: [],
      subtasks: [],
    },
  ]);

  // Create transaction modal
  const openCreateListModal = () => {
    setCreateListModalIsOpen(true);
  };

  const closeCreateListModal = () => {
    setCreateListModalIsOpen(false);
  };

  //Create List
  const handleCreateList = (title) => {
    console.log(title);
    setLists((prevList) => [
      ...prevList,
      {
        id: "",
        title: title,
        tasks: [],
        subtasks: [],
      },
    ]);
    closeCreateListModal();
  };
  console.log(lists);

  return (
    <section>
      <Header openCreateListModal={openCreateListModal} />
      <Modal
        isOpen={createListModalIsOpen}
        onRequestClose={closeCreateListModal}
        contentLabel="Create List"
        ariaHideApp={false}
        className="create-list-modal"
        overlayClassName="create-list-overlay"
        parentSelector={() => document.querySelector("#root")}
      >
        <CreateList
          handleCreateList={handleCreateList}
          closeCreateListModal={closeCreateListModal}
        />
      </Modal>
    </section>
  );
};

export default ToDo;

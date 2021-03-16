import "./App.scss";
import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import AfterSignUp from "./pages/AfterSignUp/AfterSignUp";
import ToDo from "./pages/ToDo/ToDo";
import Modal from "react-modal";
import CreateList from "./components/CreateList/CreateList";
import reactDom from "react-dom";

const App = () => {
  const [createListModalIsOpen, setCreateListModalIsOpen] = useState(false);

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
  };

  return (
    <section>
      <Switch>
        <Route path="/login" render={() => <LogIn />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/aftersignup" render={() => <AfterSignUp />} />
        <Route
          path="/todo"
          render={() => <ToDo openCreateListModal={openCreateListModal} />}
        />
      </Switch>
      <Modal
        isOpen={createListModalIsOpen}
        onRequestClose={closeCreateListModal}
        contentLabel="Create List"
        ariaHideApp={false}
        className="Modal-Create-List"
        overlayClassName="Overlay-Create-List"
      >
        <CreateList handleCreateList={handleCreateList} />
      </Modal>
    </section>
  );
};

export default App;

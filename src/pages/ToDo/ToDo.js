import Header from "../../components/Header/Header";
import React, { useState } from "react";
import CreateList from "../../components/CreateList/CreateList";
import ListContainer from "../../components/ListContainer/ListContainer";

const ToDo = () => {
  const idGenerator = Math.floor(Math.random() * 100);
  const [lists, setLists] = useState([]);

  //Create List
  const handleCreateList = (title) => {
    setLists((prevList) => [
      ...prevList,
      {
        id: `list-${idGenerator}`,
        title: title,
        tasks: [],
        subtasks: [],
      },
    ]);
  };

  //Delete List
  const handleDeleteList = (id) => {
    const filteredList = lists.filter((list) => list.id !== id);
    setLists(filteredList);
  };

  return (
    <section>
      <Header />
      <CreateList handleCreateList={handleCreateList} />
      <ListContainer lists={lists} handleDeleteList={handleDeleteList} />
    </section>
  );
};

export default ToDo;

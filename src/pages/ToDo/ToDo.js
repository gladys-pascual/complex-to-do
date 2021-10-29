import Header from "../../components/Header/Header";
import React, { useState } from "react";
import CreateList from "../../components/CreateList/CreateList";
import ListContainer from "../../components/ListContainer/ListContainer";
import "./ToDo.scss";

const ToDo = () => {
  const [lists, setLists] = useState([]);

  //Create List
  const handleCreateList = (title) => {
    const idGenerator = Math.floor(Math.random() * 100);
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

  //Update list when new task is added
  const handleUpdateList = (updatedList) => {
    setLists((prevList) => {
      return prevList.map((list) => {
        return list.id === updatedList.id ? updatedList : list;
      });
    });
  };

  return (
    <section className="todo">
      <Header />
      <CreateList handleCreateList={handleCreateList} />
      <ListContainer
        lists={lists}
        handleDeleteList={handleDeleteList}
        handleUpdateList={handleUpdateList}
      />
    </section>
  );
};

export default ToDo;

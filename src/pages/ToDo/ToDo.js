import Header from "../../components/Header/Header";
import React, { useState } from "react";
import CreateList from "../../components/CreateList/CreateList";

const ToDo = () => {
  const idGenerator = Math.floor(Math.random() * 100);
  const [lists, setLists] = useState([
    {
      id: `list-${idGenerator}`,
      title: "Dummy List 1",
      tasks: [],
      subtasks: [],
    },
  ]);

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
  console.log(lists);

  return (
    <section>
      <Header />
      <CreateList handleCreateList={handleCreateList} />
    </section>
  );
};

export default ToDo;

import { useState } from "react";
import Task from "./Components/Task.jsx";
import InputTag from "./Components/InputTag.jsx";
import "./App.css";
const App = () => {
  const [title, setTitle] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const [data, setData] = useState([
    {
      id: 1,
      title: "Wake up",
    },
    {
      id: 2,
      title: "Take a shower",
    },
    {
      id: 3,
      title: "Cook breakfast",
    },
  ]);
  const log = (e) => {
    e.preventDefault();
    const id = Date.now();
    data.push({ id, title });
    setData(data);
    /* setData((item) => {
      item.push({ id, title });
      return item;
    });
    */
  };
  const handle = (ID) => {
    const deletedItem = data.filter((item) => {
      return item.id != ID;
    });
    setData(deletedItem);
  };
  const mappedData = data.map((item) => {
    return <Task title={item.title} handleClick={handle} key={item.id} />;
  });
  return (
    <div>
      <h1>TaskBar</h1>
      <InputTag
        lable="Title"
        type="text"
        name={title}
        setName={changeTitle}
        log={log}
      />
      {mappedData}
    </div>
  );
};

export default App;

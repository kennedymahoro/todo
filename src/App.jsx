import { useState } from "react";
import Task from "./Components/Task.jsx";
import InputTag from "./Components/InputTag.jsx";
import "./App.css";
const App = () => {
  const [title, setTitle] = useState("");
  const id = Date.now();
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
    e.currentTarget.disabled = true;
    const NewState = { id, title };
    setData((item) => {
      item.push(NewState);
      console.log(data);
      return item;
    });
  };
  const handle = (ID) => {
    setData((items) => {
      return items.filter((item) => item.id !== ID);
    });
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

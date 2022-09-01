import { useState } from "react";
import Task from "./Components/Task.jsx";
import InputTag from "./Components/InputTag.jsx";
import "./App.css";
const App = () => {
  let ADD_STATE = 0;
  const [title, setTitle] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const [id, setNewId] = useState("");
  const changeNewId = (e) => {
    setNewId(e.target.value);
  };
  const [text, setNewText] = useState("");
  const changeNewText = (e) => {
    setNewText(e.target.value);
  };
  const [data, setData] = useState([
    {
      id: 1,
      title: "Wake up",
      text: "Please wake up and have a good day.",
    },
    {
      id: 2,
      title: "Take a shower",
      text: "Take a shower, brush and clean your hair.",
    },
    {
      id: 3,
      title: "Cook breakfast",
      text: "Cook some good light food for yourself.",
    },
  ]);
  const handle = (ID) => {
    setData((items) => {
      return items.filter((item) => item.id !== ID);
    });
  };
  const log = () => {
    ADD_STATE = ADD_STATE + 1;
    if (ADD_STATE == 3) {
      ADD_STATE = 0;
      const NewState = { id, title, text };
      setData((item) => {
        item.push(NewState);
        return item;
      });
    }
  };
  const mappedData = data.map((item) => {
    return (
      <Task
        uniqe={item.id}
        title={item.title}
        text={item.text}
        handleClick={handle}
        key={item.id}
      />
    );
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
      <InputTag
        lable="Text"
        type="text"
        name={text}
        setName={changeNewText}
        log={log}
      />
      <InputTag
        lable="Id"
        type="text"
        name={id}
        setName={changeNewId}
        log={log}
      />
      {mappedData}
    </div>
  );
};

export default App;

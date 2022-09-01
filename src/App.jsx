import { useState } from "react";
import Task from "./Components/Task.jsx";
import InputTag from "./Components/InputTag.jsx";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  const log = () => {
    console.log(`Your name is ${name}`);
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
      <InputTag lable="name" name={name} setName={changeName} log={log} />
      {mappedData}
    </div>
  );
};

export default App;

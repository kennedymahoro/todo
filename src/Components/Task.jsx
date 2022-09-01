import "./Task.css";

const Task = (props) => {
  return (
    <div className="content">
      <div className="texts">
        <span>{props.title}</span>
        <span>{props.text}</span>
      </div>
      <button
        onClick={() => {
          props.handleClick(props.uniqe);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default Task;

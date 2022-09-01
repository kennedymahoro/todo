const InputTag = (props) => {
  return (
    <div>
      <label>
        {`Enter a ${props.lable}`}
        <input
          type={props.type}
          value={props.name}
          onChange={(e) => props.setName(e)}
        />
      </label>
      <button onClick={props.log}>Submit</button>
    </div>
  );
};
export default InputTag;

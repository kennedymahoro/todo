const InputTag = (props) => {
  return (
    <div>
      <label>
        {`Enter a ${props.lable} `}
        <input
          type={props.type}
          value={props.name}
          onChange={(e) => props.setName(e)}
        />
      </label>
      <button
        onClick={(e) => {
          return props.log(e);
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default InputTag;

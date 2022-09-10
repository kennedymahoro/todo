const InputTag = (props) => {
  return (
    <form onSubmit={props.log}>
      <label>
        {`Enter a ${props.lable} `}
        <input
          type={props.type}
          value={props.name}
          onChange={(e) => props.setName(e)}
        />
      </label>
      <button
      /*onClick={(e) => {
          return props.log(e);
        }}
        */
      >
        Submit
      </button>
    </form>
  );
};
export default InputTag;

import { useState } from "react";

const Input = (props) => {
  const [input, setInputValue] = useState(``);
  const fetchInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue(value);
  };

  const submitInput = () => {
    props.onIsIsogram(input);
    setInputValue(``);
  };
  return (
    <div>
      <form action="">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            name="inputField"
            type="text"
            class="form-control"
            placeholder="Enter a word here.."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={fetchInputValue}
            value={input}
          ></input>
          <button type="button" class="btn btn-primary" onClick={submitInput}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;

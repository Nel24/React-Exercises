import React, { useContext } from "react";
import { useState } from "react";
import { ScriptContext } from "./MainApp";

const CreatePane = () => {
  const [script, setScript] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });
  const scriptContext = useContext(ScriptContext);
  const { addScript } = scriptContext;

  const fetchInputValue = (e) => {
    const { name, value } = e.target;
    setScript((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const submitScript = (e) => {
    e.preventDefault();
    addScript(script);
    setScript({
      title: "",
      author: "",
      date: "",
      content: "",
    });
  };
  console.log(`render CreatePane`);
  return (
    <div className="container">
      <form action="">
        <input
          name="title"
          type="text"
          onChange={fetchInputValue}
          value={script.title}
        />
        <input
          name="author"
          type="text"
          onChange={fetchInputValue}
          value={script.author}
        />
        <input
          name="date"
          type="date"
          onChange={fetchInputValue}
          value={script.date}
        />
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          onChange={fetchInputValue}
          value={script.content}
        ></textarea>
        <button onClick={submitScript}>Submit</button>
      </form>
    </div>
  );
};

export default React.memo(CreatePane);

import React, { useContext } from "react";
import { ScriptContext } from "./MainApp";

const ScriptFormat = ({ item }) => {
  const { deleteScript } = useContext(ScriptContext);
  const deleteScriptHandler = () => {
    deleteScript(item.id);
  };
  console.log(`render ScriptFormat`);
  return (
    <div>
      {<h1>Title: {item.title}</h1>}
      {<p>Author: {item.author}</p>}
      {<p>Date: {item.date}</p>}
      {<p>Content: {item.content}</p>}
      <button>Edit</button>
      <button onClick={deleteScriptHandler}>Delete</button>
    </div>
  );
};

export default React.memo(ScriptFormat);

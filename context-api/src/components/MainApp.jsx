import React, { useState } from "react";
import CreatePane from "./CreatePane";
import ScriptFormat from "./ScriptFormat";
import { v4 as uuidv4 } from "uuid";

export const ScriptContext = React.createContext(null);

const MainApp = () => {
  const [lineUpArr, setLineUp] = useState([]);

  const addScript = (script) => {
    setLineUp((prevValue) => {
      return [...prevValue, { ...script, id: uuidv4() }];
    });
  };

  const deleteScript = (id) => {
    setLineUp((prevValue) => {
      return prevValue.filter((item) => {
        return item.id !== id;
      });
    });
  };
  //   console.log(`render MainApp`);

  return (
    <div>
      <ScriptContext.Provider
        value={{
          addScript,
        }}
      >
        <CreatePane />
      </ScriptContext.Provider>
      {lineUpArr.map((item, index) => (
        <ScriptContext.Provider key={item.id} value={{ deleteScript }}>
          <ScriptFormat item={item} />
        </ScriptContext.Provider>
      ))}
    </div>
  );
};

export default React.memo(MainApp);

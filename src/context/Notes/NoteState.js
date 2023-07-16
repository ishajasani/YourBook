import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Isha",
    class: "10",
  };
  const [state,setState] = useState(s1);
  const update = () => {
    setTimeout(()=>{
        setState({
            "name" : "Harry Styles"
        })
    },3000)
  }
  return (
    <noteContext.Provider value={{state,update}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;

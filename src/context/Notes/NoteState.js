import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "64b3d2873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        }
      ];
      const [notes , setNotes] = useState(notesInitial)
  return (
    <noteContext.Provider value={{notes,setNotes}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;

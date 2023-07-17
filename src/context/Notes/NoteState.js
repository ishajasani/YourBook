import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "64b3d2873802f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873103f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d1873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2373803f2bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873803f8bc9b492ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        },
        {
          "_id": "64b3d2873803f8bc9b431a35",
          "user": "64b1521f999b818cabe60d4c",
          "title": "first note",
          "description": "helllo hello",
          "tag": "new",
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        }
      ];
      const [notes , setNotes] = useState(notesInitial)
      //Add a note

      const addNote = (title,description,tag) => {
        console.log("Adding a New note");
        const note = {
          "_id": "64b3d2873803f8bc9b491ab5",
          "user": "64b1521f999b818cabe60d4c",
          "title": title,
          "description": description ,
          "tag":tag,
          "date": "2023-07-16T11:20:39.035Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //Update a note
      const editNote = () => {
        
      }
      //Delete a note
      const deleteNote = (id) => {
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
      }
  return (
    <noteContext.Provider value={{notes,addNote,editNote,deleteNote}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;

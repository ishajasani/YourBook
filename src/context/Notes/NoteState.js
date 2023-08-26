import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:8000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  //Get all notes

  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTUyMWY5OTliODE4Y2FiZTYwZDRjIn0sImlhdCI6MTY4OTQyMTQyNH0.q6vwEQWqdx29yOR2ThxsU1l3BSfvgfM0C6cmnghFF_c",
      },
      body: JSON.stringify(),
    });
    const json = await response.json();
    setNotes(json);
  }

  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTUyMWY5OTliODE4Y2FiZTYwZDRjIn0sImlhdCI6MTY4OTQyMTQyNH0.q6vwEQWqdx29yOR2ThxsU1l3BSfvgfM0C6cmnghFF_c",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note =  await response.json();
    setNotes(notes.concat(note));
  };

  //Update a note
  const editNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTUyMWY5OTliODE4Y2FiZTYwZDRjIn0sImlhdCI6MTY4OTQyMTQyNH0.q6vwEQWqdx29yOR2ThxsU1l3BSfvgfM0C6cmnghFF_c",
      },
      body: json.stringify({title,description,tag}),
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
  };
  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTUyMWY5OTliODE4Y2FiZTYwZDRjIn0sImlhdCI6MTY4OTQyMTQyNH0.q6vwEQWqdx29yOR2ThxsU1l3BSfvgfM0C6cmnghFF_c",
      },
      body: JSON.stringify({}),
    });
    const json = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote , getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

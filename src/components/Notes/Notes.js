import noteContext from "../../context/Notes/NoteContext";
import { useContext } from "react";
import NoteItem from "./NoteItem";


const Notes = () => {
    const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <NoteItem note={note}/>;
        })}
      </div>
  )
}

export default Notes
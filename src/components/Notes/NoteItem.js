import React from "react";
import noteContext from "../../context/Notes/NoteContext";
import { useContext } from "react";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title"> {note.title}</h5>
            <span>
              <i
                className="fa-regular fa-trash mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note deleted successfully", "success");
                }}
              ></i>
            </span>
            <span>
              <i
                className="fa-regular fa-file-pen mx-2"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </span>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

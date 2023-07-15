const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1 : Get all notes : GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error : Some error occurred");
  }
});

// ROUTE 2 : Add notes : POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body(
      "description",
      "Description must be longer than 5 characters"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if there are errors return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error : Some error occurred");
    }
  }
);

// ROUTE 3 : Update an existing note : PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    //Create a new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send({ error: "Note not found" });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error : Some error occurred");
  }
});

// ROUTE 4 : Delete an existing note : DELETE "/api/notes/deletenote". Login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    //Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send({ error: "Note not found" });
    }

    //Allow deletion only if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error : Some error occurred");
  }
});
module.exports = router;

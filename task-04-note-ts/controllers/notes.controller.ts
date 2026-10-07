const { validationResult } = require("express-validator");

let notes = require("../data/notes");

interface Note {
  id: number;
  title: string;
  price: number;
}

const addAllNote = (req: any, res: any) => {
  res.json(notes);
};

const getNote = (req: any, res: any) => {
  const noteId = +req.params.noteId;

  const note = notes.find((note: Note) => note.id === noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
};

const AddNote = (req: any, res: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const note: Note = { id: notes.length + 1, ...req.body };

  notes.push(note);

  res.status(201).json(note);
};

const updateNote = (req: any, res: any) => {
  const noteId = +req.params.noteId;

  let note = notes.find((note: Note) => note.id === noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  Object.assign(note, req.body);

  res.status(200).json(note);
};

const deleteNote = (req: any, res: any) => {
  const noteId = +req.params.noteId;

  notes = notes.filter((note: Note) => note.id !== noteId);

  res.status(200).json({
    message: "Note deleted successfully",
  });
};

module.exports = {
  addAllNote,
  getNote,
  AddNote,
  updateNote,
  deleteNote,
};

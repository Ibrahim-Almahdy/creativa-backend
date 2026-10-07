const { validationResult } = require("express-validator");

const noteRepository = require("../repositories/note.repository");

const addAllNote = async (req: any, res: any) => {
  const { search } = req.query;

  let notes;

  if (search) {
    notes = await noteRepository
      .createQueryBuilder("note")
      .where("note.title ILIKE :search", {
        search: `%${search}%`,
      })
      .getMany();
  } else {
    notes = await noteRepository.find();
  }

  res.json(notes);
};

const getNote = async (req: any, res: any) => {
  const noteId = +req.params.noteId;

  const note = await noteRepository.findOneBy({
    id: noteId,
  });

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
};

const AddNote = async (req: any, res: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const note = noteRepository.create({
    title: req.body.title,
    content: req.body.content,
  });

  const savedNote = await noteRepository.save(note);

  res.status(201).json(savedNote);
};

const updateNote = async (req: any, res: any) => {
  const noteId = +req.params.noteId;

  const note = await noteRepository.findOneBy({
    id: noteId,
  });

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  noteRepository.merge(note, req.body);

  const updatedNote = await noteRepository.save(note);

  res.status(200).json(updatedNote);
};

const deleteNote = async (req: any, res: any) => {
  const noteId = +req.params.noteId;

  const note = await noteRepository.findOneBy({
    id: noteId,
  });

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  await noteRepository.remove(note);

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

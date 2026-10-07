const express = require("express");
const router = express.Router();

const noteController = require("../controllers/notes.controller");
const validationSchema = require("./middlewares/validationSchema");
router
  .route("/")
  .get(noteController.addAllNote)
  .post(validationSchema(), noteController.AddNote);

router
  .route("/:noteId")
  .get(noteController.getNote)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);

module.exports = router;

const express = require("express");

const app = express();

app.use(express.json());

const notesRouter = require("./routes/note.route");

app.use("/api/notes", notesRouter);

app.listen(5005, () => {
  console.log("listening on port: 5005");
});

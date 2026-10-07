import { Note } from "../entities/Note";
const AppDataSource = require("../datab");

const noteRepository = AppDataSource.getRepository(Note);

module.exports = noteRepository;

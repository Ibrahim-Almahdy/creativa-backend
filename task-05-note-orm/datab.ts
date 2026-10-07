import "reflect-metadata";
import { DataSource } from "typeorm";
import { Note } from "./entities/Note";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "14477411",
  database: "notes_db",
  entities: [Note],
  synchronize: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.log(error);
  });

module.exports = AppDataSource;

const fs = require("fs");
const myEmitter = require("./event");

let content1;
let content2;

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  content1 = data;

  if (content2 !== undefined) {
    myEmitter.emit("filesRead", content1, content2);
  }
});

fs.readFile("file2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  content2 = data;

  if (content1 !== undefined) {
    myEmitter.emit("filesRead", content1, content2);
  }
});

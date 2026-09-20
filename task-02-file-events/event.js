const EventEmitter = require("events");
const fs = require("fs");

const myEmitter = new EventEmitter();

myEmitter.on("filesRead", (content1, content2) => {
  const mergedContent = `${content1}\n${content2}`;

  fs.writeFile("merged.txt", mergedContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log("Files merged successfully!");
  });
});

module.exports = myEmitter;

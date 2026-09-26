const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my server");
  } else if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify([
        { id: 1, name: "Eng Ahmed Elbayaa" },
        { id: 2, name: "Eng Ibrahim Almahdys" },
      ]),
    );
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page");
  } else if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      console.log("Received data:", body);

      res.writeHead(201, { "Content-Type": "application/json" });

      res.end(
        JSON.stringify({
          message: "Data received and stored successfully",
          data: JSON.parse(body),
        }),
      );
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});

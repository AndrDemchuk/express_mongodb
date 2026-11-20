const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to your first Express Application!");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the Task Management API",
    version: "1.0.0",
  });
});

app.get("/api/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Complete the project",
      completed: false,
    },
    {
      id: 2,
      title: "Review code",
      completed: true,
    },
  ]);
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith1",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

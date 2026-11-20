const express = require("express");
const app = express();

const tasks = [
  {
    id: 1,
    title: "Complete the project",
    completed: false,
  },
  {
    id: 2,
    title: "Practice Routing",
    completed: false,
  },
  {
    id: 3,
    title: "Build the API",
    completed: true,
  },
];

app.get("/api/tasks", (req, res) => {
  const completed = req.query.completed;
  const filteredTasks = tasks.filter((task) =>
    completed === "true" ? task.completed === true : task.completed === false,
  );
  res.json(filteredTasks);
});

app.get("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
});

app.get("/api/users/:id", (req, res) => {
  res.json({ message: `User with ID ${req.params.id}` });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

function validateTask(req, res, next) {
  const { title, completed } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Task title is required" });
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ message: "Completed must be true or false" });
  }
  next();
}

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
});

app.post("/tasks", validateTask, (req, res) => {
  //create data
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: req.body.completed || false,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask,
  });
});

app.put("/tasks/:id", validateTask, (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.status(200).json({
    message: "Task updated successfully",
    task: task,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

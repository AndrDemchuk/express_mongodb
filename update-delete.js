const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

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

app.put("/tasks/:id", (req, res) => {
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

app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task to delete not found" });
  }
  let deletedTask = tasks.splice(taskIndex, 1)[0];
  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask,
  });
});

/* app.post("/tasks", (req, res) => {
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
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const app = express();

const requestTimeMiddleware = (req, res, next) => {
  const requestTime = new Date().toLocaleString();
  console.log(`Request received at: ${requestTime}`);
  req.requestTime = requestTime;
  next();
};

app.use(requestTimeMiddleware);

app.get("/", (req, res) => {
  res.json({
    message: "Custom Middleware executed successfully",
    requestTime: req.requestTime,
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    message: "API is running",
    requestTime: req.requestTime,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

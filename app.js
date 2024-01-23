//const router = express.Router();
const express = require("express");
const connectDB = require("./database");
const app = express();
const booksRouter = require("./api/routes/routes");
const morgan = require("morgan");

//const books = require("./books");
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", booksRouter);

app.use((req, res, next) => {
  return res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(err.status || 500).json(err.message || "Server Error!");
});
connectDB();

const PORT = 8000;
app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));

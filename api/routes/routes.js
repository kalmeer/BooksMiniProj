const express = require("express");
const {
  getAllBooks,
  updateBookById,
  deleteBook,
  createBook,
  getBookById,
} = require("./controllers");
const router = express.Router();

router.param("_id", async (req, res, next, _id) => {
  console.log("WORKING", _id);
  return next();
});

router.get("/books", getAllBooks);
router.delete("/books", deleteBook);
router.post("/books/", createBook);
router.get("/books/:_id", getBookById);
router.put("/books:_id", updateBookById);

module.exports = router;

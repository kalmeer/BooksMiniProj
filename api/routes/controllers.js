//let books = require("./books.model");
const books = require("../../books");
const Books_ = require("../../model/Books_");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Books_.find();
    return res.status(200).json(books);
  } catch (error) {
    next(error);
    //return res.status(500).json({ "Server Error": error });
  }
};

const createBook = async (req, res, next) => {
  try {
    const newBook = await Books_.create(req.body);
    return res.json(newBook);
  } catch (error) {
    next(error);
    //
    // return res.status(500).json({ "Server Error": error });
  }
};

const getBookById = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const book = await Books_.findById(_id);
    return res.status(200).json(book);
  } catch (error) {
    next(error);
    //return res.status(500).json({ "Server Error": error });
  }
};

const updateBookById = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const updatedBook = await Books_.findByIdAndUpdate(_id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    await updatedBook.updateOne(req.body);

    return res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
    //
    // return res.status(500).json({ "Server Error": error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Books_.findByIdAndDelete(id, req.body);
    return res.json(deletedBook);
  } catch (error) {
    return res.status(500).json({ "Server Error": error });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  deleteBook,
  updateBookById,
  getBookById,
};

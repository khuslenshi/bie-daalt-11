let books = require("../data/books");

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
};

exports.createBook = (req, res) => {
  const { title, author, price } = req.body;

  if (!title || !author || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  if (typeof price !== "number" || price <=0){
   return res.status(400).json({message: "Price must be positive number"});
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    price
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
    if (price !== undefined && (typeof price !== "number" || price <= 0)) {
    return res.status(400).json({ message: "Price must be positive number" });
  }

  const { title, author, price } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.price = price || book.price;

  res.json(book);
};

exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.json({ message: "Book deleted successfully" });
};

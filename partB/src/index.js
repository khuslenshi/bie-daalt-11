const express = require("express");

const app = express();
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "PartB API is running 🚀" });
});

// sample CRUD placeholder
app.get("/items", (req, res) => {
  res.json([{ id: 1, name: "Sample Item" }]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

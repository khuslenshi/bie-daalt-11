const express = require("express");
const cors = require("cors");
const app = express();
const bookRoutes = require("./routes/bookRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

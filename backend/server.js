const express = require("express");
const cors = require("cors");

const symptomRoutes = require("./routes/symptomRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", symptomRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
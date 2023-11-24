require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const excerciseRouter = require("./routes/excerciseRouter");

app.use(express.json());
app.use(cors());
app.use("/excercises", excerciseRouter);
app.use("/excercises/thumbnails/", express.static("./public/thumbnails-2/"));
app.use("/excercises/videos/", express.static("./public/videos-2/"));

const port = process.env.PORT || 8182;
app.listen(port, () => console.log(`Server running on port ${port}`));

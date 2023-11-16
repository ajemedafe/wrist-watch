require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
console.log(port);

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Server running on port ${port}`));

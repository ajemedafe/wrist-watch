const express = require("express");
const router = express.Router();
const excerciseController = require("../controller/excerciseController");

router.get("/", excerciseController.getAllExcercises);
router.get("/:id", excerciseController.getExcercise);

module.exports = router;

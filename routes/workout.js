const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  deleteWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// get all
router.get("/", getWorkouts);

// get single
router.get("/:id", getWorkout);

//create
router.post("/", createWorkout);

// update one
router.patch("/:id", updateWorkout);

// delete one
router.delete("/:id", deleteWorkout);

module.exports = router;

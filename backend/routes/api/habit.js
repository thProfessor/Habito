const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

const Habit = require("../../model/Habit");

router.get("/test", (req, res) => {
  res.json({
    msg: "Message from Post Page",
  });
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Habit.findOne({ user: req.user.id }).then((habit) => {
      const newHabit = {
        title: req.body.title,
        target: req.body.target,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        habbitType: req.body.habbitType,
        description: req.body.description,
      };

      habit.habits.unshift(newHabit);

      habit.save().then((habit) => {
        res.json(habit);
      });
    });
  }
);

module.exports = router;

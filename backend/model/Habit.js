const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
  },
  habits: [
    {
      title: {
        type: String,
        required: true,
      },
      target: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      habbitType: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
});

module.exports = Habit = mongoose.model("habits", HabitSchema);

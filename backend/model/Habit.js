const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
    habitname: {
        type: String,
        required: true,
      },
      habitid: {
        /* speific id for every habits registered by people and by this id 
        any one can access others habit specifications too*/
       type: string,
       required: true,
     },
    habitkind:
    {//positive type of habit or negative
        type: Boolean,
        required: true,

    },
    habitrepeat : {
        /*need help here (how to make a model object that can hold many
             options and user can select only one out of them something 
             like a drop down in front end until then declaring as number 
             as if in this many days it will repeat or remind again*/
        type: number,
        required: true,
      }, 
      description: {
          //write the thing you want us to tell you(we will customise it if someone chooses our pe defined habit)
        type: String,
        required: true,
      }, 
     
      date: {
          //how to add attribute time specific habit like at 4 am attend your lectures for that how to add time stamps
        type: Date,
        default: Date.now
      },
      habitstreak:{
          /*array of dates to save stuff to display streak of habit performed
           if habitkinfd is positive but if its negative straek will save itself 
           after asking did you did that negative habit yesterday */
          type:[Date],
         }
});
module.exports = Habit = mongoose.model("habits", HabitSchema); 
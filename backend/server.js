const express = require("express");
const mongoose = require("mongoose");
// api imported
const profile = require("./routes/api/profile");
const contact = require("./routes/api/contact");
const subscribe = require("./routes/api/subscribe");

// instance of express as app
const app = express();

// keep in env file
const DB =
  "mongodb+srv://habito:11bajehabito@cluster0.7tu3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connected to database using mongoose
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }) //return promise
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// routes section
app.use("/api/profile", profile);
app.use("/api/conatct", contact);
app.use("/api/subscribe", subscribe);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`successfully running at ${port}`);
});

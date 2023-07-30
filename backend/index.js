const express = require("express");
const mongoose = require("mongoose");
// const route = require("./routes/route");
var cors = require("cors");
const app = express();
const route = require("./routes/route");
app.use(cors());
mongoose.connect(
  "mongodb+srv://farazasif159:qwert123asif@cluster0.z8xbzcl.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// const user23 = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const notes23 = mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   description: { type: String, required: true },
//   tag: {
//     type: String,
//     default: "General",
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const saveInDb = async (req, res) => {
//   console.log("enterred");
//   const User90 = mongoose.model("User90", user23);
//   let data = new User90({
//     email: "syed",
//     password: "password",
//   });
//   const result = await data.save();
//   console.log(result);
// };
//  saveInDb()
// const notes = async (req, res) => {
//   const Notes = mongoose.model("notes23", notes23);
//     let data = new Notes({
//         user:"64ab8ecca856592bd93936b1",
//             title:"my title",
//         description:"description1"
//     });
//     const result = await data.save()
//     console.log(result)
// };
// const getNotes = async (req, res) => {
//     const Getnote = mongoose.model("notes23", notes23)
//     const result = await Getnote.find({ user: "64ab8ecca856592bd93936b1" });
//     console.log(result)
// }
app.use("/", route);
app.listen(8000, () => {
  console.log("server started");
});
// getNotes()
// notes()
// kjnkbv zkjvb zvnl

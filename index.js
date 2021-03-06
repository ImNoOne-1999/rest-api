const express = require("express");
const userRoutes = require("./router/api");
const deviceRoutes = require("./router/apiDevice");
const statusRoutes = require("./router/apiStatus");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.wkqqw.mongodb.net/mydb?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
mongoose.Promise = global.Promise;

//middleware
app.use(express.static("public"));

//body parser
app.use(bodyParser.json());

//initialize

app.use("/api", userRoutes);
app.use("/api", deviceRoutes);
app.use("/api", statusRoutes);

//error handling
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 5000, function () {
  console.log("listening for requests");
});

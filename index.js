const express = require("express");
const routes = require("./router/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/iotgo',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
=======
mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.wkqqw.mongodb.net/mydb?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
>>>>>>> 8b0bda89433263f62ba6d41bd33bcda7427a5bd4
mongoose.Promise = global.Promise;

//middleware
app.use(express.static("public"));

//body parser
app.use(bodyParser.json());

//initialize

app.use("/api", routes);

//error handling
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 5000, function () {
  console.log("listening for requests");
});

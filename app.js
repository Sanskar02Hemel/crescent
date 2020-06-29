const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var aboutRoutes = require("./routes/about");
var productRoutes = require("./routes/products");

const MONGODB_URI =
    'mongodb+srv://sanskar-sharma11:tusharbj02@cluster-crescentexports-f9w49.mongodb.net/crescent_exports';

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(aboutRoutes);
app.use("/products/",productRoutes);

mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        app.listen(3000);
        console.log("server is ready");
    })
    .catch((err) => {
        console.log(err);
    });
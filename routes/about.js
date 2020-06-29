const express = require("express");
      router = express.Router();

router.get("/", function (req, res) {
    res.render("landing");
});

router.get("/about", function (req, res) {
    res.render("about");
});

router.get("/contact", function (req, res) {
    res.render("contact");
});

router.get("/enquiry", function (req, res) {
    res.render("enquiry");
});

module.exports = router;
const path = require("path");

module.exports = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile("../develop/public/notes.html");
    });

    app.get("*", function (req, res) {
        res.sendFile("../develop/public/index.html");
    });
};
module.exports = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile("/Users/Deanna MacPherson/projects/note-taker/develop/public/notes.html");
    });

    app.get("*", function (req, res) {
        res.sendFile("/Users/Deanna MacPherson/projects/note-taker/develop/public/index.html");
    });
};
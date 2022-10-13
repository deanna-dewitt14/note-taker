const fs = require("fs");
const uuid = require("uuid");
const db = require('../develop/db/db.json');

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(db, (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        });
    });

    app.post("/api/notes", function (req, res) {
        let allNotes = [];
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v4(),
        };

        fs.readFile(db, (err, data) => {
            if (err) throw err;
            allNotes = JSON.parse(data);
            allNotes.push(newNote);
            fs.writeFile(db, JSON.stringify(allNotes), "utf-8", (err) => {
                if (err) throw err;
                res.end();
            });
        });
    });

    app.delete("/api/notes/:id", (req, res) => {
        let noteId = req.params.id;
        fs.readFile(db, (err, data) => {
            if (err) throw err;
            let notesDB = JSON.parse(data);
            const filteredNotes = notesDB.filter(values => values.id != noteId);
            fs.writeFile(db, JSON.stringify(filteredNotes), "utf-8", err => {
                if (err) throw err;
                res.end();
            });
        });
    });
};
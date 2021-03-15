const Book = require("../models/Book");

module.exports = (app) => {
    app.get("/api/books", (req, res) => {
        Book.find({})
            .then(allBooks => res.send(allBooks))
            .catch(err => res.status(422).json(err));
    });

    app.post("/api/books", (req, res) => {
        console.log("/api/books", req.body);
        const saveBook = new Book(req.body);
        saveBook.save()
            .then(savedBook => res.json(savedBook))
            .catch(err => res.status(422).json(err));
    });

    app.delete("/api/books/:id", (req, res)=> {
        Book.remove({_id: req.params.id})
        .then(()=> res.send("Success"))
        .catch((err)=> res.status(422).json(err));
    });
};
'use strict';

const appRoot = require('app-root-path');
const db = require(appRoot + '/lib/database');
const Book = db.Book;


const list = () => {
    return (req, res, next) => {
        Book.find({}).then((books) => {
            if (books) {
                res.json(books)
            } else {
                res.json({});
            }
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    };
};

const create = () => {
    return (req, res, next) => {
        let book = new Book(req.body);
        book.save().then(() => {
            res.status(201).send();
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error)
        })
    }
}



module.exports = {
    list,
    create
}
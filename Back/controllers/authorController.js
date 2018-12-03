const Author = require('../models/author');
const async = require('async');
const Book = require('../models/book');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

// Display list of all Authors.
exports.authorList = (req, res, next) => {

    Author.find()
        .sort([['family_name', 'ascending']])
        .exec((err, list_authors) => {
            if (err) { return next(err); }
            res.status(200).send({ author_list: list_authors });
        });
};

// Display detail page for a specific Author.
exports.authorDetail = (req, res, next) => {

    let id = req.params.id;
    return Promise.all([
      Author.findOne({_id: id}),
      Book.find({author: id})

    ]).then((results) => {
      let author = results[0];
      let book = results[1];

      if (!author) {
        return res.status(404).send('author not found')
      }

      return res.status(200).send({
        author,
        author_books:books //book: book

      })

    }).catch((err) => {
      return next(err);
    });

};

// Handle Author create on POST.
exports.authorCreate = (req, res, next) => {
  let data = req.body;
  let author = new Author(data);
  author.save((err, savedAuthor) => {
     if (err) {
       next(err);
     }
    return res.status(200).send(savedAuthor);
  })
};

// Display Author delete form on GET.
exports.authorDelete = (req, res, next) => {
  let id = req.params.id;
 return Promise.all([
        Author.findOne({_id: id}),
        Book.find({author: id}),

      ]).then((results) => {
        let author = results[0];
        let books = results[1];

        if (!author) {
          return res.status(404).send('author not found')
        }

        if (Book.length !== 0) {
          return res.status(400).send('Unable to delete author because it has books')
        }

        return Author.findByIdAndRemove(id)
        .then(() => {
          return res.status(200).send('Author deleted')
        })
      }).catch((err) => {
        return next(err);
      });
};

// Display Author update form on GET.
exports.authorUpdate = (req, res, next) => {
  let id= req.params.id;
  let data= req.body;
  data.id = id;
  let author = new Author(data);

  author.findByIdAndUpdate(id, author, {new: true})
  then((updatedAuthor) => {
    if(!updatedAuthor) {
      return res.status(404).send('Author not found bro, unable to update.');
    }
      return res.status(200).send(updatedAuthor);
  })
  .catch((err) => {
    return next(err);
  });
};

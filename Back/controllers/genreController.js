const Genre = require('../models/genre');
const Book = require('../models/book');
// Display list of all Genre.
exports.genreList = (req, res, next) => {

  Genre.find()
      .sort([['name', 'ascending']])
      .exec((err, list_genre) => {
          if (err) { return next(err); }
          res.status(200).send({ genre_list: list_genre });
      });
};

// Display detail page for a specific Genre.
exports.genreDetail = (req, res, next) => {
  let id = req.params.id;
  return Promise.all([
    Genre.findOne({_id: id}),
    Book.find({genre: id}),
  ]).then((results) => {
    let genre = results[0];
    let books = results[1];

    if (!genre) {
      return res.status(404).send('genre not found')
    }

    return res.status(200).send({
      genre, //book: book
      genre_books: books
    })

  }).catch((err) => {
    return next(err);
  });
};

// Handle Genre create on POST.
exports.genreCreate = (req, res, next) => {
  let data = req.body;
  let genre = new Genre(data);
  genre.save((err, savedgenre) => {
     if (err) {
       next(err);
     }
    return res.status(200).send(savedgenre);
  })
};

// Display Genre delete form on GET.
exports.genreDelete = (req, res, next) => {
  let id = req.params.id;
 return Promise.all([
        Genre.findOne({_id: id}),
        Book.find({genre: id}),

      ]).then((results) => {
        let genre = results[0];
        let books = results[1];

        if (!genre) {
          return res.status(404).send('genre not found')
        }

        if (books.length !== 0) {
          return res.status(400).send('Unable to delete author because it has books')
        }

        return Genre.findByIdAndRemove(id)
        .then(() => {
          return res.status(200).send(id)
        })
      }).catch((err) => {
        return next(err);
      });
};

// Display Genre update form on GET.
exports.genreUpdate = (req, res, next) => {
  let id= req.params.id;
  let data= req.body;
  data.id = id;
  let genre = new Genre(data);

Genre.findByIdAndUpdate(id, genre, {new: true})
  then((updatedgenre) => {
    if(!updatedgenre) {
      return res.status(404).send('genre not found bro, unable to update.');
    }
      return res.status(200).send(updatedgenre);
  })
  .catch((err) => {
    return next(err);
  });
};

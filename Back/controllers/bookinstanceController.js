const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookInstanceList = (req, res, next) => {
BookInstance.find()
    .populate('book')
    .exec((err, list_bookinstances) => {
        if (err) { return next(err); }

        res.status(200).send({ bookinstance_list: list_bookinstances });
    });
};

// Display detail page for a specific BookInstance.
exports.bookInstanceDetail = (req, res, next) => {
  let id = req.params.id;
  return Promise.all([
  BookInstance.findOne({_id: id})

  ]).then((results) => {
    let bookinstance = results[0];

    if (!bookinstance) {
      return res.status(404).send('book instance not found')
    }

    return res.status(200).send({
      bookintance

    })

  }).catch((err) => {
    return next(err);
  });
};

// Handle BookInstance create on POST.
exports.bookInstanceCreate = (req, res, next) => {
  let data = req.body;
  let bookinstance = new BookInstance(data);
  BookInstance.save((err, savedBookInstance) => {
    if (err) {
      next(err);
    }
     return res.status(200).send(savedBookInstance);
  });


};

// Display BookInstance delete form on GET.
exports.bookInstanceDelete = (req, res, next) => {
  let id = req.params.id;
  return Promise.all([
    BookInstance.findOne({_id: id}),
  ]).then((results) => {
    let bookinstance = results[0];
    if (!bookinstance) {
      return res.status(404).send('Book instance not found')
    }
    return BookInstance.findByIdAndRemove(id)
    .then(() => {
      return res.status(200).send('Book instance deleted')
    })

  }).catch((err) => {
    return next(err);
  });
};

// Display BookInstance update form on GET.
exports.bookInstanceUpdate = (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  data._id = id;

  let bookinstance = new BookInstance(data);

  BookInstance.findByIdAndUpdate(id, bookinstance, { new: true })
  .then((updatedBookInstance) => {
    if (!updatedBookInstance) {
      return res.status(404).send('Book instance not found. Unable to update.');
    }
    return res.status(200).send(updatedBookInstance);
  })
  .catch((err) => {
    return next(err);
  });
};

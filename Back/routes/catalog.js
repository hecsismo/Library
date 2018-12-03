const express = require('express');
const router = express.Router();

// Require controllers modules.
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const genreController = require('../controllers/genreController');
const bookinstanceController = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', bookController.index);

// POST request for creating Book.
router.post('/book/create', bookController.bookCreate);

// GET request to delete Book.
router.delete('/book/:id/delete', bookController.bookDelete);

// POST request to update Book.
router.put('/book/:id/update', bookController.bookUpdate);

// GET request for one Book.
router.get('/book/:id', bookController.bookDetail);

// GET request for list of all Book items.
router.get('/books', bookController.bookList);

/// AUTHOR ROUTES ///

// POST request for creating Author.
router.post('/author/create', authorController.authorCreate);

// GET request to delete Author.
router.delete('/author/:id/delete', authorController.authorDelete);

// GET request to update Author.
router.put('/author/:id/update', authorController.authorUpdate);

// GET request for one Author.
router.get('/author/:id', authorController.authorDetail);

// GET request for list of all Authors.
router.get('/authors', authorController.authorList);

/// GENRE ROUTES ///

//POST request for creating Genre.
router.post('/genre/create', genreController.genreCreate);

// GET request to delete Genre.
router.delete('/genre/:id/delete', genreController.genreDelete);

// POST request to update Genre.
router.put('/genre/:id/update', genreController.genreUpdate);

// GET request for one Genre.
router.get('/genre/:id', genreController.genreDetail);

// GET request for list of all Genre.
router.get('/genres', genreController.genreList);

/// BOOKINSTANCE ROUTES ///

// POST request for creating BookInstance.
router.post('/bookinstance/create', bookinstanceController.bookInstanceCreate);

// GET request to delete BookInstance.
router.delete('/bookinstance/:id/delete', bookinstanceController.bookInstanceDelete);

// GET request to update BookInstance.
router.put('/bookinstance/:id/update', bookinstanceController.bookInstanceUpdate);

// GET request for one BookInstance.
router.get('/bookinstance/:id', bookinstanceController.bookInstanceDetail);

// GET request for list of all BookInstance.
router.get('/bookinstances', bookinstanceController.bookInstanceList);

module.exports = router;

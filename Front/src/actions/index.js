import axios from 'axios';

//Listar los géneros
export const getGenres = () => {
    return dispatch => {
        dispatch(getGenresRequest());
        axios.get(`http://localhost:3001/catalog/genres`)
        .then(function (response) {
          dispatch(getGenresSuccess(response.data.genre_list));
        })
        .catch(function (error) {
          dispatch(getGenresError(error));
        });
    };
}

function getGenresRequest() {
    return {
        type: 'GET_GENRES_REQUEST',
        isFetching: true
    };
}

function getGenresSuccess (genres) {
    return {
        type: 'GET_GENRES_SUCCESS',
        isFetching: false,
        error: false,
        genres
    };
}

function getGenresError(errorMessage) {
    return {
        type: 'GET_GENRES_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

//Crear un género
export const postGenre = (name) => {
    console.log(name);
    return dispatch => {
        dispatch(createGenreRequest());
        axios.post(`http://localhost:3001/catalog/genre/create`,{name})
        .then(function (response) {
          dispatch(createGenreSuccess(response));
        })
        .catch(function (error) {
          dispatch(createGenreError(error));
        });
    };
}

function createGenreRequest() {
    return {
        type: 'CREATE_GENRE_REQUEST',
        isFetching: true
    };
}

function createGenreSuccess (genre) {
    return {
        type: 'CREATE_GENRE_SUCCESS',
        isFetching: false,
        error: false,
        genre
    };
}

function createGenreError(errorMessage) {
    return {
        type: 'CREATE_GENRE_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

//Borrar un género
export const deleteGenre = (genreId) => {
    return dispatch => {
        dispatch(deleteGenreRequest());
        axios.delete(`http://localhost:3001/catalog/genre/${genreId}/delete`)
        .then(function (response) {
          dispatch(deleteGenreSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(deleteGenreError(error));
        });
    };
}

function deleteGenreRequest() {
    return {
        type: 'DELETE_GENRE_REQUEST',
        isFetching: true
    };
}

function deleteGenreSuccess (genre) {
    return {
        type: 'DELETE_GENRE_SUCCESS',
        isFetching: false,
        error: false,
        genre
    };
}

function deleteGenreError(errorMessage) {
    return {
        type: 'DELETE_GENRE_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

//Listar los autores
export const getAuthors = () => {
    return dispatch => {
        dispatch(getAuthorsRequest());
        axios.get(`http://localhost:3001/catalog/authors`)
        .then(function (response) {
          dispatch(getAuthorsSuccess(response.data.author_list));
        })
        .catch(function (error) {
          dispatch(getAuthorsError(error));
        });
    };
}

function getAuthorsRequest() {
    return {
        type: 'GET_AUTHORS_REQUEST',
        isFetching: true
    };
}

function getAuthorsSuccess (authors) {
    return {
        type: 'GET_AUTHORS_SUCCESS',
        isFetching: false,
        error: false,
        authors
    };
}

function getAuthorsError(errorMessage) {
    return {
        type: 'GET_AUTHORS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

export const getBooks = () => {
    return dispatch => {
        dispatch(getBooksRequest());
        axios.get(`http://localhost:3001/catalog/books`)
        .then(function (response) {
          dispatch(getBooksSuccess(response.data.bookList));
        })
        .catch(function (error) {
          dispatch(getBooksError(error));
        });
    };
}

function getBooksRequest() {
    return {
        type: 'GET_BOOKS_REQUEST',
        isFetching: true
    };
}

function getBooksSuccess (books) {
    return {
        type: 'GET_BOOKS_SUCCESS',
        isFetching: false,
        error: false,
        books
    };
}

function getBooksError(errorMessage) {
    return {
        type: 'GET_BOOKS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

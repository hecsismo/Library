const genres = (state = [], action) => {

  const genreId = state.slice();

  switch (action.type) {

    case 'GET_GENRES_SUCCESS':return action.genres;

    case 'CREATE_GENRE_SUCCESS':
      return state.concat(action.genre.data);

    case 'DELETE_GENRE_SUCCESS':return action.genres;
      genreId.splice(genreId.indexOf(action.genre), 1);
      return genreId;

    default:
      return state;
  }
}

export default genres;

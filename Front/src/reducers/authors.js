const authors = (state = [], action) => {
  switch (action.type) {
    case 'GET_AUTHORS_SUCCESS':return action.authors;
    default:
      return state;
  }
}

export default authors;

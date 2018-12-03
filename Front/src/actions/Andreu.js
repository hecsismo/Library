export const addGenres = (genreName) =>  {

  console.log(genreName)
  return dispatch => {
    console.log("Im in addgenres action")
      dispatch(addGenresRequest());
      console.log(`http://localhost:3001/catalog/genre/create`)
       axios.post(`http://localhost:3001/catalog/genre/create`, { name: genreName })
       .then(function (response) {
         console.log("response")
         console.log(response);
         console.log("response.data")
         console.log(response.data)  //check where axios gives us the id of the deleted item back
         dispatch(addGenresSuccess(response.data));
       })
       .catch(function (error) {
         dispatch(addGenresError(error));
       });
  };
}

export const deleteGenres = (genreId) =>  {
  console.log("deleteGenres action called")
  console.log("This is my genreID:")
  console.log(genreId)
  return dispatch => {
      dispatch(deleteGenresRequest());
       axios.delete(`http://localhost:3001/catalog/genre/${genreId}/delete`)
       .then(function (response) {
         dispatch(deleteGenresSuccess(response.data));
       })
       .catch(function (error) {
         dispatch(deleteGenresError(error));
       });
  };
}

export const updateGenres = (genreUpdateArray) =>  {
  //To be filled
  //[this.props.genreIndex._id, this.props.inputText]
  const genreId = genreUpdateArray[0]
  const newName = genreUpdateArray[1]

  console.log("Update Genres action to be coded here")
  console.log(genreUpdateArray)
  console.log(genreId)
  console.log(newName)

  return dispatch => {
      dispatch(updateGenresRequest());
      console.log(`http://localhost:3001/catalog/genre/${genreId}/update`)
       axios.put(`http://localhost:3001/catalog/genre/${genreId}/update`, {
         _id: genreId,
         name: newName
       })
       .then(function (response) {
         console.log("response here")
         console.log(response);
         console.log(response.data)  //check where axios gives us the id of the deleted item back
         dispatch(updateGenresSuccess(response.data));
       })
       .catch(function (error) {
         dispatch(updateGenresError(error));
       });
  };

}

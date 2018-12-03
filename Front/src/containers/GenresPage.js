import React, { Component } from 'react';

import {connect} from 'react-redux';
import {getGenres} from '../actions';
import {deleteGenre} from '../actions';
import {postGenre} from '../actions';



class GenresPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        inputText: '',
        genreId:''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleCreateGenre = this.handleCreateGenre.bind(this);
      this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
  };

  handleInputChange(e) {
    this.setState({
      inputText: e.target.value
    });
  };

  handleCreateGenre(){
    this.props.postGenre(this.state.inputText)
  };

  handleDeleteGenre(id) {
    this.setState({
      genreId:id
    });
    this.props.deleteGenre(id)
  }

  componentWillMount(){
        this.props.getGenres();
  };


  render() {

    const listGenres = this.props.genres.map(genre =>
      <tr key={genre._id}>
      <td>
        {genre.name}
      </td>
      <td className="btn-group" role="group" area-label="Acciones">

        <input
          type="button"
          className="btn btn-primary"
          value='Editar'
        />

        <input
          type="button"
          className="btn btn-danger"
          value='Borrar'
          onClick={this.state.handleDeleteGenre}
        />

      </td>
      </tr>
    );

    return (
      <div>
      <h1 className='titulo' >Géneros de mi biblioteca</h1>

      <div className='row align-items-center' id='formulario'>
        <div className='col-sm-3 my-1'>
        <input
          type='text'
          className= 'form-control'
          value={this.state.inputText}
          onChange={this.handleInputChange}
          placeholder='Nombre'
        />
        </div>

        <div className='col-auto my-1'>
        <input
          type='button'
          className="btn btn-success"
          onClick={this.handleCreateGenre}
          value='Crear'
        />
        </div>

      </div>


      <table className='table'>
      <thead className='thead-light'>
        <th scope='col'>Nombre</th>
        <th scope='col'>Acciones</th>
      </thead>

      <tbody>
        {listGenres}
      </tbody>
      </table>

      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    genres:state.genres
  };
}

const mapDispatchToProps=dispatch=>({
  getGenres:()=>dispatch(getGenres()),
  deleteGenre:(genre)=>dispatch(deleteGenre(genre)),
  postGenre:(genre)=>dispatch(postGenre(genre)),
});

export default connect (mapStateToProps,mapDispatchToProps)(GenresPage);

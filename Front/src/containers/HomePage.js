import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getGenres} from '../actions';
import {getAuthors} from '../actions';
import {getBooks} from '../actions';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


class HomePage extends Component {

componentWillMount(){
  this.props.getGenres(),
  this.props.getAuthors(),
  this.props.getBooks()
}

  render() {
    return (
      <div className='inicio'>
      <h1 className='hometittle'>Mi Libreria</h1>
      <img className='portada'src="http://localhost:3000/books-book-library-768125.jpeg" alt='library' />

      <div className='row'>
      <div className='col-4'>
      <div className='card'id='boxhome'><Link to='/generos'>
        <h2 className='card-tittle'>{this.props.genres.length}</h2>
        <p className='card-text'>Géneros</p>
        </Link>
      </div>
      </div>

      <div className='col-4'>
      <div className='card' id='boxhome'><Link to='/autores'>
        <h2 className='card-tittle'>{this.props.authors.length}</h2>
        <p className='card-text'>Autores</p>
        </Link>
      </div>
      </div>

      <div className='col-4'>
      <div className='card' id='boxhome'><Link to='/libros'>
        <h2 className='card-tittle'>{this.props.books.length}</h2>
        <p className='card-text'>Libros</p>
        </Link>
      </div>
      </div>
      </div>

      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    genres:state.genres,
    authors:state.authors,
    books:state.books
  };
}

const mapDispatchToProps=dispatch=>({
  getGenres:()=>dispatch(getGenres()),
  getAuthors:()=>dispatch(getAuthors()),
  getBooks:()=>dispatch(getBooks())
});

export default connect (mapStateToProps,mapDispatchToProps)(HomePage);//Conectarlo con redux para recibir props. Los necesarios para motrar las 3 cajas
//Peticion auto de generos autores y libros al cargar la página (component will mount)

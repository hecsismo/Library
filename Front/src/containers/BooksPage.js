import React, { Component } from 'react';

class BooksPage extends Component {

  render() {
    return (
      <div>{'LIBROS'}</div>
    );
  }
}

export default BooksPage;//Conectarlo con redux para recibir props. Los necesarios para motrar las 3 cajas
//Peticion auto de generos autores y libros al cargar la página (component will mount)

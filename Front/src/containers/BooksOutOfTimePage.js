import React, { Component } from 'react';

class BooksOutOfTimePage extends Component {

  render() {
    return (
      <div>{'FUERA DE PLAZO'}</div>
    );
  }
}

export default BooksOutOfTimePage;
//Conectarlo con redux para recibir props. Los necesarios para motrar las 3 cajas
//Peticion auto de generos autores y libros al cargar la página (component will mount)

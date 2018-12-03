import React, { Component } from 'react';

class BooksReservePage extends Component {

  render() {
    return (
      <div>{'RESERVAS'}</div>
    );
  }
}

export default BooksReservePage;//Conectarlo con redux para recibir props. Los necesarios para motrar las 3 cajas
//Peticion auto de generos autores y libros al cargar la página (component will mount)

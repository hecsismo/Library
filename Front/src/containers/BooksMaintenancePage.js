import React, { Component } from 'react';

class BooksMaintenancePage extends Component {

  render() {
    return (
      <div>{'MANTENIMIENTO'}</div>
    );
  }
}

export default BooksMaintenancePage;//Conectarlo con redux para recibir props. Los necesarios para motrar las 3 cajas
//Peticion auto de generos autores y libros al cargar la página (component will mount)

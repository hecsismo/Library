import React, { Component } from 'react';

class AuthorsPage extends Component {

  render() {

    return (
      <div>
      <h1>Mi Biblioteca > Autores</h1>

      <form action='introducir aquí' method='post'>
      <div className='form-row'>
        <div className='col-3 my-1'>
        <input type='text' class= 'form-control'id='nombre' name='AuthorName' placeholder='Nombre'></input>
        </div>
        <div className='col-3 my-1'>
        <input type='date' class= 'form-control'id='nombre' name='AuthorName' placeholder='Fecha nacimiento'></input>
        </div>
        </div>
        <div className='form-row'>
        <div className='col-3 my-1'>
        <input type='text' class= 'form-control'id='nombre' name='AuthorName' placeholder='Apellidos'></input>
        </div>
        <div className='col-3 my-1'>
        <input type='date' class= 'form-control'id='nombre' name='AuthorName' placeholder='Fecha defunción'></input>
        </div>
        <div className='col-auto my-1'>
        <button type="crear" class="btn btn-success">Crear</button>
        </div>
      </div>
      </form>

      </div>
    );
  }
}

export default AuthorsPage;//Conectarlo con redux para recibir props. Los necesarios para motrar las 3 cajas
//Peticion auto de generos autores y libros al cargar la página (component will mount)

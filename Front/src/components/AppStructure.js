import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import HomePage from '../containers/HomePage';
import GenresPage from '../containers/GenresPage';
import AuthorsPage from '../containers/AuthorsPage';
import BooksPage from '../containers/BooksPage';
import BooksReservePage from '../containers/BooksReservePage';
import BooksLoanPage from '../containers/BooksLoanPage';
import BooksGatherPage from '../containers/BooksGatherPage';
import BooksMaintenancePage from '../containers/BooksMaintenancePage';
import BooksOutOfTimePage from '../containers/BooksOutOfTimePage';

class AppStructure extends Component {

  render() {
    return (
      <Router>
      <div className = 'row'>
      <div className = 'col-3' id = 'navegacion'>
            <ul>
              <li className='navtittle'><Link to='/'> Mi biblioteca</Link></li>
              <li className='navmain'><Link to='/generos'> Géneros</Link></li>
              <li className='navmain'><Link to='/autores'> Autores</Link></li>
              <li className='navmain'><Link to='/libros'> Libros</Link></li>
              <li className='navsub'><Link to='/libros/reservar'> Reservar libro</Link></li>
            </ul>
            <ul>
              <li className='navtittle'><Link to='/gestion/reservar'>Gestión de la biblioteca</Link></li>
              <li className='navmain'><Link to='/gestion/prestar'>Prestar libro</Link></li>
              <li className='navmain'><Link to='/gestion/recoger'>Recoger libro</Link></li>
              <li className='navmain'><Link to='/gestion/mantenimiento'>Libros en mantenimiento</Link></li>
              <li className='navmain'><Link to='/gestion/fuera-plazo'>Libros fuera de plazo</Link></li>
            </ul>
      </div>
      <div className='col-9'id='vista'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/generos" component={GenresPage} />
            <Route path="/autores" component={AuthorsPage} />
            <Route path="/libros" component={BooksPage} />
            <Route path="/libros/reservar" component={BooksReservePage} />
            <Route path="/gestion/prestar" component={BooksLoanPage} />
            <Route path="/gestion/recoger" component={BooksGatherPage} />
            <Route path="/gestion/mantenimiento" component={BooksMaintenancePage} />
            <Route path="/gestion/fuera-plazo" component={BooksOutOfTimePage} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }

}

export default AppStructure;

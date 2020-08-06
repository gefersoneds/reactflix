import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/cadastro/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path = "/" component = {Home} exact/>
    <Route path = "/cadastro/video" component = {CadastroVideo}/>
    <Route path = "/" component = {() => <div>Página 404</div>}/>

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

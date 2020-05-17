import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';

import Header from './components/header/header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';
import Profile from './containers/user/Profile/Profile';
import Home from './containers/Home/Home';
import BuscadorCharacter from './components/Buscador/BuscadorCharacter';
import ResultadoCharacter from './components/Buscador/ResultadoCharacter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} exact />
                    <Route path='/login' component={Login} exact />
                    <Route path='/register' component={Register} exact />
                    <Route path='/profile' component={Profile} exact />
                    <Route path='/buscador' component={BuscadorCharacter} exact />
                    <Route path='/result' component={ResultadoCharacter} exact/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;

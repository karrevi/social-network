import React from 'react';
import './App.scss';

import Header from './components/header/header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/login' component={Login} exact />
                <Route path='/register' component={Register} exact />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;

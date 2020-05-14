import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    < React.StrictMode >
        < Provider store={store} >
            < App />
            </Provider>
         </React.StrictMode>,
    document.getElementById('root')
);
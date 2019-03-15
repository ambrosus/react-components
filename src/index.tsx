/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App/App';
import 'normalize.css';
import './styles/style.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

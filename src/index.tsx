/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App/App';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'normalize.css';
import './styles/style.scss';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx';
import './styles/modules/custom-theme.scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

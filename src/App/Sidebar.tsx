/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

import './App.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from './Router';

export const Sidebar = () => {
    return (
        <aside>
            <h3>Documentation</h3>
            <ul className='Sidebar'>
                {ROUTES.map(route => (<NavLink to={route.url} exact>{route.title}</NavLink>))}
            </ul>
        </aside>
    );
};

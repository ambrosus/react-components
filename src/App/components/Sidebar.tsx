/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

import '../App.scss';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <aside>
            <h3>Documentation</h3>
            <ul className='Sidebar'>
                <li>
                    <NavLink to='/button'>Button</NavLink>
                </li>
                <li>
                    <NavLink to='/checkbox'>Checkbox</NavLink>
                </li>
                <li>
                    <NavLink to='/input'>Input</NavLink>
                </li>
                <li>
                    <NavLink to='/radio'>Radio</NavLink>
                </li>
                <li>
                    <NavLink to='/sidemenu'>Sidemenu</NavLink>
                </li>
                <li>
                    <NavLink to='/switch'>Switch</NavLink>
                </li>
                <li>
                    <NavLink to='/tabs'>Tabs</NavLink>
                </li>
                <li>
                    <NavLink to='/textarea'>Textarea</NavLink>
                </li>
            </ul>
        </aside>
    );
};

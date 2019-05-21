/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState } from 'react';
import Router from './Router';

import './App.scss';
import { Sidebar } from './Sidebar';

export default function App() {

  return (
    <div className='App'>
      <Sidebar />
      <main>
        <h1 className='title'>Ambrosus react components, API docs</h1>
        <p className='subtitle'>How to use ambrosus react components, their options and examples.</p>

        <Router />

        <footer>
          Ambrosus, all rights reserved, 2019.
        </footer>
      </main>
    </div>
  );
}

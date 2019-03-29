/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useRef, useEffect } from 'react';
import { Sidemenu } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React, { Component } from 'react';
import { Sidemenu } from '@ambrosus/react';

function App(props) {
  const [sidemenu, setSidemenu] = props;

  const onOpenSidemenu = () => {
    console.log('Sidemenu is open!');
    setSidemenu(true);
  };

  const onCloseSidemenu = () => {
    console.log('Sidemenu is closed!');
    setSidemenu(false);
  };

  return (
    <Sidemenu onOpen={onOpenSidemenu} onClose={onCloseSidemenu} open={sidemenu}>
      <h3 style={{ color: '#fff' }}>Sidenav state managed in parent</h3>
      <p>This one is console logging, using parent's onOpen and onClose methods</p>
    </Sidemenu>
    <Sidemenu>
      <h3 style={{ color: '#fff' }}>Sidenav state managed internally</h3>
    </Sidemenu>
  );
}`;

// tslint:disable-next-line:class-name
export function _Sidemenu() {
  const [sidemenu, setSidemenu] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const onOpenSidemenu = () => {
    console.log('Sidemenu is open!');
    setSidemenu(true);
  };

  const onCloseSidemenu = () => {
    console.log('Sidemenu is closed!');
    setSidemenu(false);
  };

  return (
    <section>
      <h2>Sidemenu</h2>

      {/* Props */}
      <h3 className='subtitle'>Props</h3>
      <Table
        head={['Prop', 'Type', 'Description']}
        body={[
          ['header', 'ReactNode', 'Optional header content'],
          ['children', 'ReactNode', 'Custom content as children'],
          ['onOpen', 'function', 'onOpen event callback'],
          ['onClose', 'function', 'onClose event callback'],
          ['open', 'boolean', 'Opens or closes sidenav'],
          ['icon', 'boolean', 'To render sidenav icon, default is true'],
          ['iconSrc', 'string', 'Custom sidenav icon'],
          ['portal', 'DOM element', 'Element within which to render the sidenav as a child on open'],
        ]}
      />

      <h3 className='subtitle'>Example</h3>
      <pre className='lang-jsx'>
        <code className='line-numbers'>
          {example}
        </code>
      </pre>

      <div className='examples'>
        <Sidemenu onOpen={onOpenSidemenu} onClose={onCloseSidemenu} open={sidemenu}>
          <h3 style={{ color: '#fff' }}>Sidenav state managed in parent</h3>
          <p>This one is console logging, using parent's onOpen and onClose methods</p>
        </Sidemenu>
        <Sidemenu>
          <h3 style={{ color: '#fff' }}>Sidenav state managed internally</h3>
        </Sidemenu>
      </div>

    </section >
  );
}

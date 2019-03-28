/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { Tabs, Tab } from '../../components';
import Table from '../Table';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/jsx/jsx';

import '../App.scss';

const example = `import React from 'react';
import { Tabs } from '@ambrosus/react';

...

return (
  <>
    <Tabs active={1}>
      <Tab label='Tab 1'>
        See ya later, <em>Alligator</em>!
      </Tab>
      <Tab label='Tab 2'>
        After 'while, <em>Crocodile</em>!
      </Tab>
      <Tab label='Tab 3' disabled>
        Tab 3, some content!
      </Tab>
    </Tabs>

    <Tabs active={0} light>
      <Tab label='Tab 1'>
        Single tab and light theme!
      </Tab>
    </Tabs>
  </>
);`;

export const _Tabs = () => {
  const exampleRef: any = useRef(document.getElementById('example'));

  useEffect(() => {
    if (exampleRef.current) {
      CodeMirror.default(exampleRef.current, {
        mode: 'jsx',
        theme: 'default',
        lineNumbers: true,
        readOnly: true,
        lineWrapping: true,
        value: example,
      });
    }
  }, [exampleRef]);

  return (
    <section>
      <h2>Tabs</h2>

      {/* Props */}
      <h3 className='subtitle'>Props</h3>
      <h4>Tab</h4>
      <Table
        head={['Prop', 'Type', 'Description']}
        body={[
          ['disabled', 'boolean', 'Disables the tab if true'],
          ['children', 'ReactNode', 'Custom content as children'],
          ['label', 'string', 'Tab label'],
          ['active', 'boolean', 'Active tab'],
        ]}
      />
      <h4>Tabs</h4>
      <Table
        head={['Prop', 'Type', 'Description']}
        body={[
          ['active', 'boolean', 'Child at given index to be active'],
          ['children', 'ReactNode', 'Custom content as children (Tab components)'],
          ['light', 'boolean', 'Light theme'],
        ]}
      />

      <h3 className='subtitle'>Example</h3>
      <div className='code' ref={exampleRef}></div>

      <div className='examples'>
        <Tabs active={2}>
          <Tab label='Tab 1'>
            See ya later, <em>Alligator</em>!
                    </Tab>
          <Tab label='Tab 2'>
            After 'while, <em>Crocodile</em>!
                    </Tab>
          <Tab label='Tab 3' disabled>
            Tab 3, some content!
                    </Tab>
        </Tabs>

        <Tabs active={0} light>
          <Tab label='Tab 1'>
            Single tab and light theme!
                    </Tab>
        </Tabs>
      </div>

    </section >
  );
};

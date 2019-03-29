/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { Radio } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Radio } from '@ambrosus/react';

...

return (
  <>
    <div>
      <h4>Options 1</h4>
      <Radio name='options1'>I'm a default radio</Radio>
      <Radio name='options1' label='Radio with a label prop' />
      <Radio name='options1' checked>I'm pre-checked</Radio>
      <Radio name='options1' light>I'm light</Radio>
      <Radio name='options1' disabled>I'm disabled</Radio>
    </div>
    <div>
      <h4>Options 2</h4>
      <Radio name='options2'>I'm a default radio</Radio>
      <Radio name='options2' label='Radio with a label prop' />
    </div>
  </>
);`;

export const _Radio = () => {

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <section>
      <h2>Radio</h2>

      {/* Props */}
      <h3 className='subtitle'>Props</h3>
      <Table
        head={['Prop', 'Type', 'Description']}
        body={[
          ['disabled', 'boolean', 'Disables the radio if true'],
          ['id', 'string', 'Id Attribute to assign to radio'],
          ['className', 'string', 'Class(es) to be applied to the component'],
          ['children', 'ReactNode', 'Element to be displayed within root element'],
          ['label', 'string', 'Radio text'],
          ['light', 'boolean', 'Light (white) color'],
          ['onChange', 'function', 'onChange event callback'],
          ['value', 'string', 'Radio value'],
          ['name', 'string', 'Radio name'],
        ]}
      />

      <h3 className='subtitle'>Example</h3>
      <pre className='lang-jsx'>
        <code className='line-numbers'>
          {example}
        </code>
      </pre>

      <div className='examples'>
        <div>
          <h4 style={{ marginBottom: '15px' }}>Options 1</h4>
          <Radio name='options1'>I'm a default radio</Radio>
          <Radio name='options1' label='Radio with a label prop' />
          <Radio name='options1' light>I'm light</Radio>
          <Radio name='options1' disabled>I'm disabled</Radio>
        </div>
        <div>
          <h4 style={{ marginBottom: '15px' }}>Options 2</h4>
          <Radio name='options2'>I'm a default radio</Radio>
          <Radio name='options2' label='Radio with a label prop' />
        </div>
      </div>

    </section >
  );
};

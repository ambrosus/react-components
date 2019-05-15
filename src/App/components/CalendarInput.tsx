/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { CalendarInput } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { CalendarInput } from '@ambrosus/react';

...

return (
  <>
    <CalendarInput label='Default input' />
    <CalendarInput label='Calendar input with date range' daterange/>
    <CalendarInput label='Calendar input with light theme'/>
    <CalendarInput label='Calendar input with info button' info='Some info'/>
    <CalendarInput label='Disabled calendar input' disabled/>
  </>
);`;

export const _CalendarInput = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <section>
      <h2>CalendarInput</h2>

      {/* Props */}
      <h3 className='subtitle'>Props</h3>
      <Table
        head={['Prop', 'Type', 'Description']}
        body={[
          ['disabled', 'boolean', 'Disables the input if true'],
          ['id', 'string', 'Id Attribute to assign to input'],
          ['className', 'string', 'Class(es) to be applied to the component'],
          ['label', 'string', 'Input title'],
          ['onChange', 'function', 'onChange event callback'],
          ['onBlur', 'function', 'onBlur event callback'],
          ['onFocus', 'function', 'onFocus event callback'],
          ['light', 'boolean', 'Light theme'],
          ['check', 'boolean', 'Show success sign on valid input'],
          ['error', 'string', 'Error to display'],
          ['info', 'HTML string | string', 'Info box'],
          ['daterange', 'boolean', 'Date range selection'],
        ]}
      />

      <h3 className='subtitle'>Example</h3>
      <pre className='lang-jsx'>
        <code className='line-numbers'>{example}</code>
      </pre>

      <div className='examples'>
        <CalendarInput label='Default input' />
        <CalendarInput label='Calendar input with date range' daterange />
        <CalendarInput
          daterange
          label='Date range with min and max date'
          maxDate={new Date()}
          minDate={new Date('10/10/2018')}
          onChange={e => console.log(e)}
        />
        <CalendarInput label='Calendar input with light theme' light />
        <CalendarInput
          label='Calendar input with info button'
          info='Some info'
        />
        <CalendarInput label='Disabled calendar input' disabled />
      </div>
    </section>
  );
};

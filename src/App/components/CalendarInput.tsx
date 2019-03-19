/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { CalendarInput } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _CalendarInput = () => {
    return (
        <section>
            <h2>CalendarInput</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
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
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <CalendarInput label='Default input' />
                <CalendarInput label='Calendar input with date range' daterange />
                <CalendarInput label='Calendar input with light theme' light />
                <CalendarInput label='Calendar input with info button' info='Some info' />
                <CalendarInput label='Disabled calendar input' disabled />
            </div>

        </section>
    );
};

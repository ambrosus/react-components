/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Number } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Number = () => {
    return (
        <section>
            <h2>Number</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Number } from '@ambrosus/react';

...

return (
  <>
    <Number style={{ color: '#4f299b', fontSize: '22px' }} value='1000.25' />
    <Number value='100.123' fixed={0} />
    <Number value='100' side='left' fixed={1} />
    <Number value='100.000000001' fixed={false} />
    <Number value='10012341231252123.12345' fixed={3} />
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <Number style={{ color: '#4f299b', fontSize: '22px' }} value='1000.25' />
                <Number value='100.123' fixed={0} />
                <Number value='100' fixed={1} />
                <Number value='100.000000001' fixed={false} />
                <Number value='10012341231252123.12345' fixed={3} />
            </div>

        </section>
    );
};

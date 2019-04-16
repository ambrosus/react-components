/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { Number } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Number } from '@ambrosus/react';

...

return (
  <>
    <Number value='100.123' fixed={0} />
    <Number value='100.999' fixed={0} />
    <Number value='100' fixed={1} />
    <Number value='1e-18' fixed={2} />
    <Number value='750.999966058' fixed={2} />
    <Number value='750.999966058' fixed={5} />
    <Number value='10012341231252123.12345' fixed={3} />
    <Number value='-10012341231252123.12345' fixed={3} />
  </>
);`;

export const _Number = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Number</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <h4>IDelimiter</h4>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['thousands', 'string', 'Default .'],
                    ['decimals', 'string', 'Default ,'],
                ]}
            />
            <h4>Number</h4>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['id', 'string', 'Id Attribute to assign to button'],
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['value', 'number', 'Value'],
                    ['fixed', 'number', 'Number of decimal places'],
                    ['delimiter', 'IDelimiter', 'Changes delimiter on thousands and decimals'],
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <pre className='lang-jsx'>
                <code className='line-numbers'>
                    {example}
                </code>
            </pre>

            <div className='examples'>
                <Number value='100.123' fixed={0} />
                <Number value='100.999' fixed={0} />
                <Number value='100' fixed={1} />
                <Number value='1e-18' fixed={2} />
                <Number value='750.999966058' fixed={2} />
                <Number value='750.999966058' fixed={5} />
                <Number value='10012341231252123.12345' fixed={3} />
                <Number value='-10012341231252123.999' fixed={3} />
            </div>

        </section >
    );
};

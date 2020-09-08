/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import React, { useRef, useEffect } from 'react';
import { Currency } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Currency } from '@ambrosus/react';

...

return (
  <>
    <Currency style={{ color: '#4f299b', fontSize: '22px' }} value='1000.25' />
    <Currency value='100.123' fixed={0} />
    <Currency value='100' side='left' fixed={1} symbol='€' />
    <Currency value='100.000000001' fixed={false} symbol='AMB' />
    <Currency value='10012341231252123.12345' fixed={3} />
  </>
);`;

export const _Currency = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Currency</h2>

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
            <h4>Currency</h4>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['id', 'string', 'Id Attribute to assign to button'],
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['value', 'number', 'Value'],
                    ['fixed', 'number', 'Number of decimal places'],
                    ['symbol', 'string', 'Default $'],
                    ['side', 'string', 'Side to place the symbol, default right'],
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
                <Currency style={{ color: '#4f299b', fontSize: '22px' }} value='1000.25' />
                <Currency value='100.123' fixed={0} />
                <Currency value='100' side='left' fixed={1} symbol='€' />
                <Currency value='100.000000001' fixed={false} symbol='AMB' />
                <Currency value='10012341231252123.12345' fixed={3} />
            </div>

        </section >
    );
};

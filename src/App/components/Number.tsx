/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { Number } from '../../components';
import Table from '../Table';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/jsx/jsx';

import '../App.scss';

const example = `import React from 'react';
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
);`;

export const _Number = () => {
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
            <div className='code' ref={exampleRef}></div>

            <div className='examples'>
                <Number style={{ color: '#4f299b', fontSize: '22px' }} value='1000.25' />
                <Number value='100.123' fixed={0} />
                <Number value='100' fixed={1} />
                <Number value='100.000000001' fixed={false} />
                <Number value='10012341231252123.12345' fixed={3} />
            </div>

        </section >
    );
};

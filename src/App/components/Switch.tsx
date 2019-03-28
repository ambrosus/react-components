/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { Switch } from '../../components';
import Table from '../Table';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/jsx/jsx';

import '../App.scss';

const example = `import React from 'react';
import { Switch } from '@ambrosus/react';

...

return (
  <>
    <Switch>I'm a default switch, <a>some link inside</a></Switch>
    <Switch label='Switch with a label prop' />
    <Switch light>I'm a light switch</Switch>
    <Switch disabled>I'm a disabled switch</Switch>
  </>
);`;

export const _Switch = () => {
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
            <h2>Switch</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['disabled', 'boolean', 'Disables the input if true'],
                    ['id', 'string', 'Id Attribute to assign to input'],
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['label', 'string', 'Checkbox text'],
                    ['onChange', 'function', 'onChange event callback'],
                    ['onBlur', 'function', 'onBlur event callback'],
                    ['onFocus', 'function', 'onFocus event callback'],
                    ['light', 'boolean', 'Light theme'],
                    ['checked', 'boolean', 'Checked value'],
                    ['children', 'ReactNode', 'Children'],
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <div className='code' ref={exampleRef}></div>

            <div className='examples'>
                <Switch>I'm a default switch, <a>some link inside</a></Switch>
                <Switch label='Switch with a label prop' />
                <Switch light>I'm a light switch</Switch>
                <Switch disabled>I'm a disabled switch</Switch>
            </div>

        </section >
    );
};

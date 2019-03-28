/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { Button } from '../../components';
import Table from '../Table';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/jsx/jsx';

import '../App.scss';

const example = `import React from 'react';
import { Button } from '@ambrosus/react';

...

return (
    <>
        <Button>I'm a default, solid button</Button>
        <Button loading>I'm loading</Button>
        <Button transparent>I'm transparent</Button>
        <Button secondary>I'm a secondary button</Button>
        <Button outline light>I'm a light, outline button</Button>
        <Button outline>I'm outline</Button>
        <Button onClick={() => console.log('Click!')}>I have a click handler</Button>
        <Button disabled>I'm disabled</Button>
        <Button className='test' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)' }}>I have custom class and style</Button>
    </>
);`;

export const _Button = () => {
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
            <h2>Button</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['disabled', 'boolean', 'Disables the button if true'],
                    ['id', 'string', 'Id Attribute to assign to button'],
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['children', 'ReactNode', 'Element to be displayed within root element'],
                    ['loading', 'boolean', 'Shows loading animation if true and disables the button'],
                    ['type', 'string', 'Button type (default: button)'],
                    ['label', 'string', 'Button text'],
                    ['icon', 'string', 'Path to icon, to display in the button'],
                    ['primary', 'boolean', 'Primary AMB color'],
                    ['secondary', 'boolean', 'Secondary AMB color'],
                    ['light', 'boolean', 'Light (white) color'],
                    ['solid', 'boolean', 'Solid button style'],
                    ['outline', 'boolean', 'Outline button style'],
                    ['transparent', 'boolean', 'Transparent button style'],
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <div className='code' ref={exampleRef}></div>

            <div className='examples'>
                <Button>I'm a default, solid button</Button>
                <Button loading>I'm loading</Button>
                <Button transparent>I'm transparent</Button>
                <Button secondary>I'm a secondary button</Button>
                <Button outline light>I'm a light, outline button</Button>
                <Button outline>I'm outline</Button>
                <Button onClick={() => console.log('Click!')}>I have a click handler</Button>
                <Button disabled>I'm disabled</Button>
                <Button className='test' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)' }}>I have custom class and style</Button>
            </div>

        </section>
    );
};

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import React, { useRef, useEffect } from 'react';
import { Input } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Input } from '@ambrosus/react';

...

return (
  <>
    <Input label='Default input' />
    <Input label='Disabled input' disabled />
    <Input label='Password input' type='password' />
    <Input label='With a placeholder' placeholder='Some placeholder' />
    <Input label='With pre-inserted content' value='Some pre-inserted value' />
    <Input label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
    <Input label='With errors' error='Some error' />
    <Input label='Light input' placeholder='Some placeholder' light info='Some info' spellCheck={false} />
  </>
);`;

export const _Input = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Input</h2>

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
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <pre className='lang-jsx'>
                <code className='line-numbers'>
                    {example}
                </code>
            </pre>

            <p>If you set value or use children as value, you have to provide onChange handler, otherwise input will be rendered as read-only.</p>

            <div className='examples'>
                <Input label='Default input' />
                <Input label='Disabled input' disabled />
                <Input label='Password input' type='password' />
                <Input label='With a placeholder' placeholder='Some placeholder' />
                <Input label='With pre-inserted content' value='Some pre-inserted value' onChange={() => null} />
                <Input label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
                <Input label='With errors' error='Some error' />
                <Input label='Light input' placeholder='Some placeholder' light info='Some info' spellCheck={false} />
            </div>

        </section >
    );
};

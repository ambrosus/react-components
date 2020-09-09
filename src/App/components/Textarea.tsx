/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import React, { useRef, useEffect } from 'react';
import { Textarea } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Textarea } from '@ambrosus/react';

...

return (
  <>
    <Textarea label='Default textarea' />
    <Textarea label='Disabled textarea' disabled />
    <Textarea label='With a placeholder' placeholder='Some placeholder' />
    <Textarea label='With pre-inserted content'>Some pre-inserted content inside</Textarea>
    <Textarea label='Valid textarea' />
    <Textarea label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
    <Textarea label='With errors' error='Some error' />
    <Textarea label='Light textarea' placeholder='Some placeholder' light info='Some info' />
  </>
);`;

export const _Textarea = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Textarea</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['disabled', 'boolean', 'Disables the textarea if true'],
                    ['id', 'string', 'Id Attribute to assign to textarea'],
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['label', 'string', 'Textarea title'],
                    ['onChange', 'function', 'onChange event callback'],
                    ['onBlur', 'function', 'onBlur event callback'],
                    ['onFocus', 'function', 'onFocus event callback'],
                    ['light', 'boolean', 'Light theme'],
                    ['check', 'boolean', 'Show success sign on valid textarea'],
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

            <p>If you set value or use children as value, you have to provide onChange handler, otherwise textarea will be rendered as read-only.</p>

            <div className='examples'>
                <Textarea label='Default textarea' />
                <Textarea label='Disabled textarea' disabled />
                <Textarea label='With a placeholder' placeholder='Some placeholder' />
                <Textarea label='With pre-inserted content' onChange={() => null}>Some pre-inserted content inside</Textarea>
                <Textarea label='Valid textarea' />
                <Textarea label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
                <Textarea label='With errors' error='Some error' />
                <Textarea label='Light textarea' placeholder='Some placeholder' light info='Some info' />
            </div>

        </section >
    );
};

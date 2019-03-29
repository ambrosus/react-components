/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useRef, useEffect } from 'react';
import { Checkbox } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Checkbox } from '@ambrosus/react';

...

return (
  <>
    <Checkbox>I'm a default checkbox, <a>some link inside</a></Checkbox>
    <Checkbox label='Checkbox with a label prop' />
    <Checkbox light>I'm a light checkbox</Checkbox>
    <Checkbox disabled>I'm a disabled checkbox</Checkbox>
  </>
);`;

export const _Checkbox = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Checkbox</h2>

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
            <pre className='lang-jsx'>
                <code className='line-numbers'>
                    {example}
                </code>
            </pre>

            <div className='examples'>
                <Checkbox>I'm a default checkbox, <a>some link inside</a></Checkbox>
                <Checkbox label='Checkbox with a label prop' />
                <Checkbox light>I'm a light checkbox</Checkbox>
                <Checkbox disabled>I'm a disabled checkbox</Checkbox>
            </div>

        </section >
    );
};

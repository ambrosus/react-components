/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Input } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Input = () => {
    return (
        <section>
            <h2>Input</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
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
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <p>If you set value or use children as value, you have to provide onChange handler, otherwise input will be rendered as read-only.</p>

            <div className='examples'>
                <Input label='Default input' />
                <Input label='Disabled input' disabled />
                <Input label='Password input' type='password' />
                <Input label='With a placeholder' placeholder='Some placeholder' />
                <Input label='With pre-inserted content' value='Some pre-inserted value' />
                <Input label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
                <Input label='With errors' error='Some error' />
                <Input label='Light input' placeholder='Some placeholder' light info='Some info' spellCheck={false} />
            </div>

        </section>
    );
};

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Textarea } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Textarea = () => {
    return (
        <section>
            <h2>Textarea</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Textarea } from '@ambrosus/react';

...

return (
  <>
    <Textarea label='Default textarea' />
    <Textarea label='Disabled textarea' disabled />
    <Textarea label='With a placeholder' placeholder='Some placeholder' />
    <Textarea label='With pre-inserted content'>Some pre-inserted content inside</Textarea>
    <Textarea touched label='Valid textarea' />
    <Textarea label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
    <Textarea label='With errors' touched errors='Some error' shouldValidate invalid />
    <Textarea label='Light textarea' placeholder='Some placeholder' light touched info='Some info' />
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <p>If you set value or use children as value, you have to provide onChange handler, otherwise textarea will be rendered as read-only.</p>

            <div className='examples'>
                <Textarea label='Default textarea' />
                <Textarea label='Disabled textarea' disabled />
                <Textarea label='With a placeholder' placeholder='Some placeholder' />
                <Textarea label='With pre-inserted content'>Some pre-inserted content inside</Textarea>
                {/* <Textarea touched label='Valid textarea' />
                <Textarea label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
                <Textarea label='With errors' touched errors='Some error' shouldValidate invalid />
                <Textarea label='Light textarea' placeholder='Some placeholder' light touched info='Some info' /> */}
            </div>

        </section>
    );
};

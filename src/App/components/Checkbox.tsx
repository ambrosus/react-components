/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Checkbox } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Checkbox = () => {
    return (
        <section>
            <h2>Checkbox</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Checkbox } from '@ambrosus/react';

...

return (
  <>
    <Checkbox>I'm a default checkbox, <a>some link inside</a></Checkbox>
    <Checkbox label='Checkbox with a label prop' />
    <Checkbox light>I'm a light checkbox</Checkbox>
    <Checkbox disabled>I'm a disabled checkbox</Checkbox>
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <Checkbox>I'm a default checkbox, <a>some link inside</a></Checkbox>
                <Checkbox label='Checkbox with a label prop' />
                <Checkbox light>I'm a light checkbox</Checkbox>
                <Checkbox disabled>I'm a disabled checkbox</Checkbox>
            </div>

        </section>
    );
};

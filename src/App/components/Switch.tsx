/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Switch } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Switch = () => {
    return (
        <section>
            <h2>Switch</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Switch } from '@ambrosus/react';

...

return (
  <>
    <Switch>I'm a default switch, <a>some link inside</a></Switch>
    <Switch label='Switch with a label prop' />
    <Switch light>I'm a light switch</Switch>
    <Switch disabled>I'm a disabled switch</Switch>
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <Switch>I'm a default switch, <a>some link inside</a></Switch>
                <Switch label='Switch with a label prop' />
                <Switch light>I'm a light switch</Switch>
                <Switch disabled>I'm a disabled switch</Switch>
            </div>

        </section>
    );
};

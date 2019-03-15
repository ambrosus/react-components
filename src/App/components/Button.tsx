/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Button } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Button = () => {
    return (
        <section>
            <h2>Button</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
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
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

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

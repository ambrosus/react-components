/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useEffect } from 'react';
import Prism from 'prismjs';

import '../App.scss';

const usage = `import { Button } from '@ambrosus/react'

...

return (
    <Button onClick={() => console.log('Clicked!')}>Click me</Button>
);`;

export const _Home = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Getting started</h2>

            <h3 className='subtitle'>Introduction</h3>
            <p>Ambrosus branded react UI components library. Build new apps very quickly, using our UI library.</p>

            <h3 className='subtitle'>Install</h3>
            <pre className='lang-bash'>
                <code className='line-numbers'>
                    npm install @ambrosus/react
                </code>
            </pre>

            <h3 className='subtitle'>Basic usage</h3>
            <pre className='lang-jsx'>
                <code className='line-numbers'>
                    {usage}
                </code>
            </pre>

        </section>
    );
};

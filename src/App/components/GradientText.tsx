import React, { useEffect } from 'react';
import { GradientText } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Button } from '@ambrosus/react';

...

return (
    <>
        <GradientText colors={['#00B7F9', '#0042BA', '#5B1EC0']} fontWeight={700} size={40}>React Components</GradientText>
        <GradientText colors={['#FF5447', '#5B1EC0']} size={55} fontWeight={100}>React Component</GradientText>
        <GradientText vertical={true} colors={['#00B7F9', '#0042BA', '#5B1EC0']} size={40} value='React Component'/>
    </>
);`;

export const _GradientText = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Button</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['children', 'ReactNode', 'Element to be displayed within root element'],
                    ['vertical', 'boolean', 'To define the type of the gradient'],
                    ['value', 'string', 'Text value'],
                    ['colors', 'string[]', 'Array of colors for the gradient'],
                    ['size', 'number', 'Size of the text'],
                    ['fontWeight', 'number', 'Weight of the text'],
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <pre className='lang-jsx'>
                <code className='line-numbers'>
                    {example}
                </code>
            </pre>

            <div className='examples'>
                <GradientText colors={['#00B7F9', '#0042BA', '#5B1EC0']} fontWeight={700} size={40}>React Components</GradientText>
                <GradientText colors={['#FF5447', '#5B1EC0']} size={55} fontWeight={100}>React Component</GradientText>
                <GradientText vertical={true} colors={['#00B7F9', '#0042BA', '#5B1EC0']} size={40} value='React Component' />
            </div>

        </section >
    );
};

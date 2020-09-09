/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import React, { useRef, useEffect } from 'react';
import { Paragraph } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Paragraph } from '@ambrosus/react';

...

return (
  <>
    <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
    <Paragraph content='Here some <b>html content</b>.' />
    <Paragraph light style={{ padding: '30px', background: '#333' }}>I have a light theme</Paragraph>
  </>
);`;

export const _Paragraph = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Paragraph</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['id', 'string', 'Id Attribute to assign to input'],
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['light', 'boolean', 'Light theme'],
                    ['content', 'HTML string | string', 'Paragraph content'],
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
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                <Paragraph content='Here is some <b>html content</b>.' />
                <Paragraph light style={{ padding: '30px', background: '#333' }}>I have a light theme</Paragraph>
            </div>

        </section >
    );
};

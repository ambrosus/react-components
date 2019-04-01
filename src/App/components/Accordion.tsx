/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useEffect } from 'react';
import { Accordion } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';

import '../App.scss';

const example = `import React from 'react';
import { Accordion } from '@ambrosus/react';

...

return (
    <Accordion
        closeAll
        open={[0, 1]}
        items={
            [
                {
                    title: 'Accordion first',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                },
                {
                    title: 'Accordion second',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                },
                {
                    title: 'Accordion third',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                },
            ]
        }
    />
); `;

export const _Accordion = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>Accordion</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['open', 'number[]', 'Array of item indexes to open on initial load'],
                    ['className', 'string', 'Class(es) to be applied to the component'],
                    ['light', 'boolean', 'Light theme'],
                    ['styles', 'object', 'Styles to be applied to the component'],
                    ['closeAll', 'boolean', 'To have only one accordion open at a time'],
                    ['icon', 'string', 'Arrow icon replacement'],
                    ['noIcon', 'boolean', 'Hides arrow icon'],
                    ['items', 'array', 'Array of objects with title and content (Accordion items)'],
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <pre className='lang-jsx'>
                <code className='line-numbers'>
                    {example}
                </code>
            </pre>

            <div className='examples'>
                <Accordion
                    closeAll
                    open={[0, 1]}
                    items={
                        [
                            {
                                title: 'Accordion first',
                                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
                            },
                            {
                                title: 'Accordion second',
                                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
                            },
                            {
                                title: 'Accordion third',
                                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
                            },
                        ]
                    }
                />
            </div >

        </section >
    );
};

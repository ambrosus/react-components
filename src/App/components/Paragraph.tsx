/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Paragraph } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Paragraph = () => {
    return (
        <section>
            <h2>Paragraph</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Paragraph } from '@ambrosus/react';

...

return (
  <>
    <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
    <Paragraph content='Here some <b>html content</b>.' />
    <Paragraph light style={{ padding: '30px', background: '#333' }}>I have a light theme</Paragraph>
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                <Paragraph content='Here is some <b>html content</b>.' />
                <Paragraph light style={{ padding: '30px', background: '#333' }}>I have a light theme</Paragraph>
            </div>

        </section>
    );
};

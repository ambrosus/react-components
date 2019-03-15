/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Radio } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Radio = () => {
    return (
        <section>
            <h2>Radio</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Radio } from '@ambrosus/react';

...

return (
  <>
    <div>
      <h4>Options 1</h4>
      <Radio name='options1'>I'm a default radio</Radio>
      <Radio name='options1' label='Radio with a label prop' />
      <Radio name='options1' checked>I'm pre-checked</Radio>
      <Radio name='options1' light>I'm light</Radio>
      <Radio name='options1' disabled>I'm disabled</Radio>
    </div>
    <div>
      <h4>Options 2</h4>
      <Radio name='options2'>I'm a default radio</Radio>
      <Radio name='options2' label='Radio with a label prop' />
    </div>
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <div>
                    <h4 style={{ marginBottom: '15px' }}>Options 1</h4>
                    <Radio name='options1'>I'm a default radio</Radio>
                    <Radio name='options1' label='Radio with a label prop' />
                    <Radio name='options1' light>I'm light</Radio>
                    <Radio name='options1' disabled>I'm disabled</Radio>
                </div>
                <div>
                    <h4 style={{ marginBottom: '15px' }}>Options 2</h4>
                    <Radio name='options2'>I'm a default radio</Radio>
                    <Radio name='options2' label='Radio with a label prop' />
                </div>
            </div>

        </section>
    );
};

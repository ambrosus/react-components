/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Tabs, Tab } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Tabs = () => {
    return (
        <section>
            <h2>Tabs</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Tabs } from '@ambrosus/react';

...

return (
  <>
    <Tabs active={1}>
      <Tab label='Tab 1'>
        See ya later, <em>Alligator</em>!
      </Tab>
      <Tab label='Tab 2'>
        After 'while, <em>Crocodile</em>!
      </Tab>
      <Tab label='Tab 3' disabled>
        Tab 3, some content!
      </Tab>
    </Tabs>

    <Tabs active={0} light>
      <Tab label='Tab 1'>
        Single tab and light theme!
      </Tab>
    </Tabs>
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <Tabs active={2}>
                    <Tab label='Tab 1'>
                        See ya later, <em>Alligator</em>!
                    </Tab>
                    <Tab label='Tab 2'>
                        After 'while, <em>Crocodile</em>!
                    </Tab>
                    <Tab label='Tab 3' disabled>
                        Tab 3, some content!
                    </Tab>
                </Tabs>

                <Tabs active={0} light>
                    <Tab label='Tab 1'>
                        Single tab and light theme!
                    </Tab>
                </Tabs>
            </div>

        </section>
    );
};

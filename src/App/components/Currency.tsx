/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { Currency } from '../../components';

declare let Prism: any;

import '../App.scss';

export const _Currency = () => {
    return (
        <section>
            <h2>Currency</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { Currency } from '@ambrosus/react';

...

return (
  <>
    <Currency value='100.25' />
    <Currency value='100.123' fixed={0} />
    <Currency value='100' side='left' fixed={1} symbol='€' />
    <Currency value='100.000000001' fixed={false} symbol='AMB' />
    <Currency value='10012341231252123.12345' fixed={3} />
  </>
);
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <Currency value='100.25' />
                <Currency value='100.123' fixed={0} />
                <Currency value='100' side='left' fixed={1} symbol='€' />
                <Currency value='100.000000001' fixed={false} symbol='AMB' />
                <Currency value='10012341231252123.12345' fixed={3} />
            </div>

        </section>
    );
};

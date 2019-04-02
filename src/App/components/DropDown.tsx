/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useEffect } from 'react';
import { DropDown } from '../../components';
import Table from '../Table';
import Prism from 'prismjs';
import iconSettings from '../../assets/svg/settings.svg';
import iconLogout from '../../assets/svg/logout.svg';
import iconNetwork from '../../assets/svg/network.svg';

import '../App.scss';
import { IDropDownMenuItem } from '../../interfaces';

const example = `import React from 'react';
import { DropDown } from '@ambrosus/react';

...

return (
  <>
    <DropDown menu={dropDownMenu} label='toggle dropdown' />
  </>
);`;

const dropDownMenu: IDropDownMenuItem[] = [
    {
        type: 'header',
        text: 'Name Surname',
        meta: 'namesurname@gmail.com',
    },
    {
        type: 'separator',
    },
    {
        type: 'link',
        text: 'Network',
        to: '/network',
        icon: iconNetwork,
    },
    {
        type: 'separator',
    },
    {
        type: 'link',
        text: 'Settings',
        to: '/settings',
        icon: iconSettings,
    },
    {
        type: 'action',
        text: 'Sign out',
        click: () => console.log('sign out'),
        icon: iconLogout,
    },
];

export const _DropDown = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <section>
            <h2>DropDown</h2>
            <DropDown menu={dropDownMenu} label='toggle dropdown' />

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <h4>IDropDownMenuItem</h4>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['type', 'link | header | separator | action', 'Type of item'],
                    ['text', 'string', 'Item text'],
                    ['meta', 'string', 'Item meta'],
                    ['to', 'string', 'To link'],
                    ['icon', 'HTML', 'Icon to show on the left'],
                    ['image', 'string', 'Image (for heading)'],
                    ['click', 'func', 'Click action'],
                ]}
            />

            <h4>IDropDown</h4>
            <Table
                head={['Prop', 'Type', 'Description']}
                body={[
                    ['label', 'string', 'Text to open the dropdown'],
                    ['icon', 'HTML', 'Icon to open the dropdown'],
                    ['component', 'ReactNode', 'Component to open the dropdown'],
                    ['onClose', 'func', 'Open callback'],
                    ['onOpen', 'func', 'Close callback'],
                    ['open', 'boolean', 'Opens dropdown'],
                    ['menu', 'IDropDownMenu[]', 'Menu'],
                    ['maxWidth', 'number', 'Sets max-width of the dropdown'],
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <pre className='lang-jsx'>
                <code className='line-numbers'>
                    {example}
                </code>
            </pre>

            <div className='examples'>
                <div style={{ width: '100%', padding: '30px 15px', display: 'flex', justifyContent: 'center' }}>
                    <DropDown menu={dropDownMenu} label='toggle dropdown' />
                </div>
            </div>

        </section >
    );
};

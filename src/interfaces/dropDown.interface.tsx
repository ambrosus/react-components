import React, { MouseEvent } from 'react';

interface Element extends React.HTMLProps<any> {
    className?: string;
    id?: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export interface IDropDownMenuItem {
    type: 'link' | 'header' | 'separator' | 'action';
    text?: string;
    meta?: string;
    to?: string;
    icon?: string;
    image?: string;
    click?: () => any;
}

export interface IDropDown extends Element {
    label?: string;
    icon?: any;
    component?: any;
    onClose?: () => any;
    onOpen?: () => any;
    open?: boolean;
    menu?: IDropDownMenuItem[];
    maxWidth?: number;
    transition?: 'Fade' | 'Grow' | 'Zoom';
    transitionProps?: any;
}

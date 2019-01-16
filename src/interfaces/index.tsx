import React, { MouseEvent, Component } from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
}

export interface IButton extends Element {
    children: string | React.ReactNode;
    loading?: boolean;
    type?: 'button' | 'submit';
    label?: string;
    icon?: string;
    primary?: boolean;
    outlined?: boolean;
    spinner: string;
}

export interface ICheckbox extends Element {
    checkedIcon?: string;
    uncheckedIcon?: string;
    label?: string;
    labelPosition?: 'left' | 'right';
    icon?: string;
    value?: any;
    checked?: boolean;
    name?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

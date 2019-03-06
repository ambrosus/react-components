/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { MouseEvent, ReactNode } from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
}

export interface IButton extends Element {
    children: ReactNode;
    loading?: boolean;
    type?: 'button' | 'submit';
    label?: string;
    icon?: string;
    primary?: boolean;
    secondary?: boolean;
    solid?: boolean;
    outline?: boolean;
    transparent?: boolean;
    light?: boolean;
}

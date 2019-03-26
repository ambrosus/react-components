/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { ReactNode } from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
}

export interface ICheckbox extends Element {
    label?: string;
    value?: string | number;
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    light?: boolean;
    checked?: boolean;
    children?: ReactNode;
}

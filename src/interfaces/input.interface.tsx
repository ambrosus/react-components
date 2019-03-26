/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
}

export interface IInput extends Element {
    label?: string;
    value?: string | number;
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    error?: string;
    light?: boolean;
    info?: string;
}

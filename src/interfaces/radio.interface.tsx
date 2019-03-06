/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { MouseEvent } from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
}

export interface IRadio extends Element {
    changed?: (event: any) => any;
    name: string;
    light?: boolean;
    value?: string;
    label?: string;
    checked?: boolean;
}

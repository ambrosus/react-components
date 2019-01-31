import React, { ReactNode } from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
}

export interface ICheckbox extends Element {
    label?: string;
    value?: string | number;
    changed?: (event: any) => any;
    light?: boolean;
    checked?: boolean;
    children?: ReactNode;
}

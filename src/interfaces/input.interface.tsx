import React, { MouseEvent } from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
}

export interface IInput extends Element {
    label?: string;
    value?: string | number;
    changed?: (event: any) => any;
    invalid?: boolean;
    shouldValidate?: boolean;
    touched?: boolean;
    errors?: string;
    light?: boolean;
    info?: string;
    password?: boolean;
}

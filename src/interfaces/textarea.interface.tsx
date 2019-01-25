import React from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
}

export interface ITextarea extends Element {
    label?: string;
    value?: string | number;
    changed?: (event: any) => any;
    invalid?: boolean;
    shouldValidate?: boolean;
    touched?: boolean;
    errors?: string;
    light?: boolean;
    info?: string;
}

import React, { MouseEvent, ReactNode } from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
}

export interface ISVG extends Element {
    src: string;
    wrapper?: 'span' | 'div';
}

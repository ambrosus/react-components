/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import { ReactNode } from 'react';

interface Element extends React.HTMLProps<any> {
    className?: string;
    id?: string;
}

export interface IParagraph extends Element {
    children?: ReactNode;
    content?: string;
    light?: boolean;
}

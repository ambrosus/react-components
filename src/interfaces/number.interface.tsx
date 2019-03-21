/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
interface Element extends React.HTMLProps<any> {
    className?: string;
    id?: string;
}

export interface INumber extends Element {
    value: number | string;
    fixed?: number | false;
    delimiter?: {
        thousands?: string;
        decimals?: string;
    };
}

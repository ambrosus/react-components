/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
interface Element extends React.HTMLProps<any> {
    className?: string;
    id?: string;
}

export interface ICurrency extends Element {
    value: number;
    symbol?: string;
    side?: string;
    fixed?: number;
}

import { ReactNode } from 'react';

export interface IGradientText {
    className?: string;
    children?: ReactNode;
    value?: string;
    size: number;
    fontWeight?: number;
    vertical?: boolean;
    colors: string[];
}

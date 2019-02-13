import { ReactNode } from 'react';

export interface ITab {
    children?: ReactNode | ReactNode[];
    label: string;
    disabled?: boolean;
    active?: boolean;
}

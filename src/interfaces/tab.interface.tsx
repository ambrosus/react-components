/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import { ReactNode } from 'react';

export interface ITab {
    children?: ReactNode | ReactNode[];
    label: string;
    disabled?: boolean;
    active?: boolean;
}

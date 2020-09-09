/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import { ReactNode } from 'react';

export interface ISidemenu {
    header?: ReactNode;
    children?: any;
    open?: boolean;
    onOpen?: () => any;
    onClose?: () => any;
    icon?: boolean;
    iconSrc?: string;
    portal?: any;
}

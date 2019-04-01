/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */

export interface IAccordionItem {
    title: string;
    content: string;
    open?: boolean;
    onClick: (index: number) => void;
    index: number;
    icon?: string;
    noIcon?: boolean;
}

export interface IAccordion {
    open?: number[];
    className?: string;
    styles?: any;
    light?: boolean;
    closeAll?: boolean;
    // tslint:disable-next-line:prefer-array-literal
    items: Array<{
        title: string;
        content: string;
    }>;
    icon?: string;
    noIcon?: boolean;
}

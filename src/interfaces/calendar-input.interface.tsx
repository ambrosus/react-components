/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

interface Element extends React.HTMLProps<any> {
    disabled?: boolean;
    className?: string;
    id?: string;
}

export interface ICalendarInput extends Element {
    label?: string;
    changed?: (event: any) => any;
    invalid?: boolean;
    shouldValidate?: boolean;
    touched?: boolean;
    errors?: string;
    light?: boolean;
    info?: string;
    daterange?: boolean;
}

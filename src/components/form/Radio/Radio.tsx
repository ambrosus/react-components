/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import clsx from 'clsx';

import './Radio.scss';
import { IRadio } from '../../../interfaces';

const Radio = React.forwardRef((props: IRadio, ref: any) => {
    const { className, name, checked, light, onChange, value, label, children, disabled, ...other } = props;

    const classes = clsx(
        'AMB-Radio',
        light && 'light',
        disabled && 'disabled',
        className
    );

    return (
        <label className={classes}>
            <input type='radio' name={name} value={value} onChange={onChange} disabled={disabled} ref={ref} {...other} />
            <div className='radio'></div>
            <span className='label'>{children || label || value}</span>
        </label>
    );
});

export default Radio;

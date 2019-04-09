/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import clsx from 'clsx';

import './Radio.scss';
import { IRadio } from '../../../interfaces';

const Radio = (props: IRadio) => {
    const { className, name, checked, light, onChange, value, label, children, disabled, ...otherProps } = props;

    const classes = clsx(
        'AMB-Radio',
        light && 'light',
        disabled && 'disabled',
        className
    );

    return (
        <label className={classes} {...otherProps}>
            <input type='radio' name={name} value={value} onChange={onChange} disabled={disabled} />
            <div className='radio'></div>
            <span className='label'>{children || label || value}</span>
        </label>
    );
};

export default Radio;

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import clsx from 'clsx';

import './Switch.scss';
import { ICheckbox } from '../../../interfaces';

const Switch = (props: ICheckbox) => {
    const { label, className, value, name, checked, disabled, onChange, children, light, ...otherProps } = props;

    const classes = clsx(
        'AMB-Switch',
        light && 'light',
        disabled && 'disabled',
        className
    );

    return (
        <div className={classes} {...otherProps}>
            <label>
                <div className='checkbox'>
                    <input
                        type='checkbox'
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        name={name}
                    />
                    <div className='switch'></div>
                </div>
            </label>
            {(children || label) && (
                <span className='label'>{children || label}</span>
            )}
        </div>
    );
};

export default Switch;

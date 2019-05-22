/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import clsx from 'clsx';

import './Switch.scss';
import { ICheckbox } from '../../../interfaces';

const Switch = React.forwardRef((props: ICheckbox, ref: any) => {
    const { label, className, value, name, checked, disabled, onChange, children, light, ...other } = props;

    const classes = clsx(
        'AMB-Switch',
        light && 'light',
        disabled && 'disabled',
        className
    );

    return (
        <div className={classes}>
            <label>
                <div className='checkbox'>
                    <input
                        {...other}
                        type='checkbox'
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        name={name}
                        ref={ref}
                    />
                    <div className='switch'></div>
                </div>
            </label>
            {(children || label) && (
                <span className='label'>{children || label}</span>
            )}
        </div>
    );
});

export default Switch;

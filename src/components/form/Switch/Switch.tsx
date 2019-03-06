/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

import './Switch.scss';
import { ICheckbox } from '../../../interfaces';

const Switch = (props: ICheckbox) => {
    const { label, className, value, checked, disabled, changed, children, light, ...otherProps } = props;

    const classes: any = [
        'AMB-Switch',
        `${light && 'light' || ''}`,
        `${disabled && 'disabled' || ''}`,
        `${className || ''}`.trim(),
    ].filter(Boolean);

    return (
        <div className={classes.join(' ').trim()} {...otherProps}>
            <label>
                <div className='checkbox'>
                    <input
                        type='checkbox'
                        value={value}
                        checked={checked}
                        onChange={changed}
                        disabled={disabled}
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

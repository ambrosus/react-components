/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { SVG } from '../../utils';
import clsx from 'clsx';

import './Checkbox.scss';
import { ICheckbox } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';

const Checkbox = React.forwardRef((props: ICheckbox, ref: any) => {
    const { label, className, value, disabled, checked, onChange, children, light, name, ...other } = props;

    const classes = clsx(
        'AMB-Checkbox',
        light && 'light',
        disabled && 'disabled',
        className
    );

    return (
        <div className={classes}>
            <label>
                <div className='checkbox'>
                    <input
                        type='checkbox'
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        name={name}
                        ref={ref}
                        {...other}
                    />
                    <SVG className='SVG icon' src={iconSuccess} />
                </div>
            </label>
            {(children || label) && (
                <span className='label'>{children || label}</span>
            )}
        </div>
    );
});

export default Checkbox;

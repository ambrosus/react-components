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

const Checkbox = (props: ICheckbox) => {
    const { label, className, value, disabled, checked, onChange, children, light, name, ...otherProps } = props;

    const classes = clsx(
        'AMB-Checkbox',
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
                    <SVG className='SVG icon' src={iconSuccess} />
                </div>
            </label>
            {(children || label) && (
                <span className='label'>{children || label}</span>
            )}
        </div>
    );
};

export default Checkbox;

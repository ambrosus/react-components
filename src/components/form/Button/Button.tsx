/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import * as React from 'react';
import { SVG } from '../../utils';
import iconSpinner from '../../../assets/svg/spinner.svg';
import clsx from 'clsx';

import './Button.scss';
import { IButton } from '../../../interfaces';

const Button = (props: IButton) => {
    const { label, children, icon, loading, className, type, disabled, solid, outline, transparent, primary, secondary, light, ...otherProps } = props;

    const buttonType = [solid && 'solid', outline && 'outline', transparent && 'transparent'].filter(Boolean)[0];
    const color = [primary && 'primary', secondary && 'secondary', light && 'light'].filter(Boolean)[0];
    const options = [loading && 'loading'].filter(Boolean);

    const classes = clsx(
        'AMB-Button',
        ...options,
        buttonType || 'solid',
        color || 'primary',
        className
    );

    return (
        <button
            {...otherProps}
            type={type || 'button'}
            disabled={loading || disabled}
            className={classes}>
            {icon && <SVG className='icon SVG' src={icon} />}
            {label}
            {children}
            {loading && <SVG className='spinner SVG' src={iconSpinner} />}
        </button>
    );
};

export default Button;

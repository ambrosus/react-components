/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import * as React from 'react';
import { SVG } from '../../utils';
import iconSpinner from '../../../assets/svg/spinner.svg';
import clsx from 'clsx';

import './Button.scss';
import { IButton } from '../../../interfaces';

const Button = React.forwardRef((props: IButton, ref: any) => {
    const { label, children, icon, loading, className, type, disabled, solid, outline, transparent, primary, secondary, light, ...other } = props;

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
            {...other}
            type={type || 'button'}
            disabled={loading || disabled}
            className={classes}
            ref={ref}
        >
            {icon && <SVG className='icon SVG' src={icon} />}
            {label}
            {children}
            {loading && <SVG className='spinner SVG' src={iconSpinner} />}
        </button>
    );
});

export default Button;

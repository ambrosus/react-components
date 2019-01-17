import * as React from 'react';
import SVG from 'react-svg';
import iconSpinner from '../../../assets/svg/spinner.svg';

import './Button.scss';
import { IButton } from '../../../interfaces';

const Button = (props: IButton) => {
    const { solid, outline, transparent } = props;
    const { primary, secondary, light } = props;
    const { label, children, icon, loading, className, type, disabled, clicked, ...otherProps } = props;

    const buttonType = [`${solid && 'solid' || ''}`, `${outline && 'outline' || ''}`, `${transparent && 'transparent' || ''}`].filter(Boolean)[0];
    const color = [`${primary && 'primary' || ''}`, `${secondary && 'secondary' || ''}`, `${light && 'light' || ''}`].filter(Boolean)[0];
    const options = [`${loading && 'loading' || ''}`].filter(Boolean);

    const classes = [
        'AMB-Button',
        ...options,
        buttonType,
        color,
        `${className || ''}`.trim(),
    ].join(' ').trim();

    return (
        <button
            {...otherProps}
            type={type || 'button'}
            disabled={loading || disabled}
            className={classes}>
            {icon && <SVG className='icon' src={icon} wrapper='span' />}
            {label}
            {children}
            {loading && <SVG className='spinner' src={iconSpinner} wrapper='span' />}
        </button>
    );
};

export default Button;

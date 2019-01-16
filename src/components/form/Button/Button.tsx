import * as React from 'react';
import SVG from 'react-svg';
import iconSpinner from '../../../assets/svg/spinner.svg';

import './Button.scss';
import { IButton } from '../../../interfaces';

const Button = (props: IButton) => {
    const { label, children, icon, loading, primary, outline, transparent, className, type, disabled } = props;

    const classes = [
        'AMB-Button',
        `${loading && 'loading' || ''}`,
        `${primary && 'primary' || ''}`,
        `${outline && 'outline' || ''}`,
        `${transparent && 'transparent' || ''}`,
        className,
    ].join(' ').trim();

    return (
        <button
            type={type || 'button'}
            disabled={loading || disabled}
            className={classes}
            onClick={props.clicked}>{props.children}>
            {icon && <SVG className='icon' src={icon} wrapper='span' />}
            {label}
            {children}
            {loading && <SVG className='spinner' src={iconSpinner} />}
        </button>
    );
};

export default Button;

import * as React from 'react';
import SVG from 'react-svg';
import spinnerLogo from '../../assets/icons/spinner.svg';

import './Button.scss';
import { IButton } from '../../interfaces';

const Button = (props: IButton) => {
    const classes = [`AMB-Button ${props.loading && 'loading'} ${props.primary && 'primary'} ${props.outlined && 'outlined'}`, props.className].join(' ').trim();
    const disabled = props.hasOwnProperty('disabled') ? props.disabled : true;
    const spinner = props.spinner ? props.spinner : spinnerLogo;

    return (
    <button type={props.type || 'button'} disabled={props.loading || disabled} className={classes}>
        {props.icon && <SVG className='Sideicon' src={props.icon} wrapper='span' />}
        {props.label}
        {props.children}
        {props.loading && <SVG className='Loadingicon' src={spinner} />}
    </button>);
};

export default Button;

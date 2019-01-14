import React, { Component } from 'react';
import SVG from 'react-svg';
import spinnerLogo from '../../assets/icons/spinner.svg';

import './Button.scss';
import { IButton } from '../../interfaces';

export default class Button extends Component<IButton> {
    public static defaultProps: IButton = {
        children: 'Click Me',
        disabled: false,
        spinner: spinnerLogo,
        type: 'button',
    };

    public render() {
        const {label, children, icon, type, loading, primary, outlined, onClick, className, disabled } = this.props;
        const spinner = this.props.spinner ? this.props.spinner : spinnerLogo;
        const classes = [`AMB-Button ${loading && 'loading'} ${primary && 'primary'} ${outlined && 'outlined'}`, className].join(' ').trim();

        return (
            <button type={type} onClick={onClick} disabled={loading || disabled} className={classes}>
                {icon && <SVG className='Sideicon' src={icon} wrapper='span' />}
                {label && label}
                {children}
                {loading && <SVG className='Loadingicon' src={spinner} />}
            </button>);
    }
}

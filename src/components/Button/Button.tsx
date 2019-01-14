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
        const {label, children, spinner, icon, loading, primary, outlined, className, disabled, ...otherProps } = this.props;
        const classes = [`AMB-Button ${loading && 'loading'} ${primary && 'primary'} ${outlined && 'outlined'}`, className].join(' ').trim();

        return (
            <button disabled={loading || disabled} className={classes} {...otherProps}>
                {icon && <SVG className='Sideicon' src={icon} wrapper='span' />}
                {label && label}
                {children}
                {loading && <SVG className='Loadingicon' src={spinner} />}
            </button>);
    }
}

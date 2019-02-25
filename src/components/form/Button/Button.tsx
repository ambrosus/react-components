/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import * as React from 'react';
import { SVG } from '../../utils';
import iconSpinner from '../../../assets/svg/spinner.svg';

import './Button.scss';
import { IButton } from '../../../interfaces';

const Button = (props: IButton) => {
    const { label, children, icon, loading, className, type, disabled, solid, outline, transparent, primary, secondary, light, ...otherProps } = props;

    const buttonType = [`${solid && 'solid' || ''}`, `${outline && 'outline' || ''}`, `${transparent && 'transparent' || ''}`].filter(Boolean)[0];
    const color = [`${primary && 'primary' || ''}`, `${secondary && 'secondary' || ''}`, `${light && 'light' || ''}`].filter(Boolean)[0];
    const options = [`${loading && 'loading' || ''}`].filter(Boolean);

    const classes = [
        'AMB-Button',
        ...options,
        buttonType || 'solid',
        color || 'primary',
        `${className || ''}`.trim(),
    ].join(' ').trim();

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

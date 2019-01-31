/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';

import './Radio.scss';
import { IRadio } from '../../../interfaces';

const Radio = (props: IRadio) => {
    const { className, name, checked, light, changed, value, label, disabled, ...otherProps } = props;

    const classes: any = [
        'AMB-Radio',
        `${className || ''}`.trim(),
        `${light && 'light' || ''}`,
        `${disabled && 'disabled' || ''}`,
    ].filter(Boolean);

    return (
        <label className={classes.join(' ').trim()} {...otherProps}>
            <input type='radio' name={name} value={value} onChange={changed} disabled={disabled} />
            <div className='radio'></div>
            <span className='label'>{label || value}</span>
        </label>
    );
};

export default Radio;

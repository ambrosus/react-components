/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';
import { SVG } from '../../utils';

import './Checkbox.scss';
import { ICheckbox } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';

const Checkbox = (props: ICheckbox) => {
    const { label, className, value, disabled, checked, changed, children, light, ...otherProps } = props;

    const classes: any = [
        'AMB-Checkbox',
        `${light && 'light' || ''}`,
        `${disabled && 'disabled' || ''}`,
        `${className || ''}`.trim(),
    ].filter(Boolean);

    return (
        <div className={classes.join(' ').trim()} {...otherProps}>
            <label>
                <div className='checkbox'>
                    <input
                        type='checkbox'
                        value={value}
                        checked={checked}
                        onChange={changed}
                        disabled={disabled}
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

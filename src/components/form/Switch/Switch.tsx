/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';

import './Switch.scss';
import { ICheckbox } from '../../../interfaces';

const Switch = (props: ICheckbox) => {
    const { label, className, value, checked, changed, children, invalid, shouldValidate,
        touched, errors, light, ...otherProps } = props;

    const classes: any = [
        'AMB-Switch',
        `${light && 'light' || ''}`,
        `${touched && !invalid && 'valid' || ''}`,
        `${className || ''}`.trim(),
    ].filter(Boolean);

    if (invalid && shouldValidate && touched) {
        classes.push('error');
    }

    return (
        <div className={classes.join(' ').trim()} {...otherProps}>
            <label>
                <div className='checkbox'>
                    <input
                        type='checkbox'
                        value={value}
                        checked={checked}
                        onChange={changed}
                    />
                    <div className='switch'></div>
                </div>
            </label>
            {(children || label) && (
                <span className='label'>{children || label}</span>
            )}
        </div>
    );
};

export default Switch;

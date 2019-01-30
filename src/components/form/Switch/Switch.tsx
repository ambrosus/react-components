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
    ].filter(Boolean);

    if (invalid && shouldValidate && touched) {
        classes.push('error');
    }

    return (
        <div className={classes.join(' ').trim()}>
            <label>
                <div className='checkbox'>
                    <input
                        {...otherProps}
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

import React from 'react';
import { SVG } from '../../utils';

import './Checkbox.scss';
import { ICheckbox } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';

const Checkbox = (props: ICheckbox) => {
    const { label, className, value, checked, changed, children, invalid, shouldValidate,
        touched, errors, light, ...otherProps } = props;

    const classes: any = [
        'AMB-Checkbox',
        `${light && 'light' || ''}`,
        `${touched && !invalid && 'valid' || ''}`,
    ].filter(Boolean);

    if (invalid && shouldValidate && touched) {
        classes.push('error');
    }

    return (
        <label className={classes.join(' ').trim()}>
            <div className='checkbox'>
                <input
                    {...otherProps}
                    type='checkbox'
                    value={value}
                    checked={checked}
                    onChange={changed}
                />
                <SVG className='SVG icon' src={iconSuccess} />
            </div>
            {(children || label) && (
                <span className='label'>{children || label}</span>
            )}
        </label>
    );
};

export default Checkbox;

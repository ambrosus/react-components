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
        `${props.light && 'light' || ''}`,
        `${props.touched && !props.invalid && 'valid' || ''}`,
    ].filter(Boolean);

    if (props.invalid && props.shouldValidate && props.touched) {
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
            {(children || props.label) && (
                <span className='label'>{children || props.label}</span>
            )}
        </label>
    );
};

export default Checkbox;

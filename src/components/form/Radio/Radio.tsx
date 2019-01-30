import React from 'react';

import './Radio.scss';
import { IRadio } from '../../../interfaces';

const Radio = (props: IRadio) => {
    const { className, name, checked, light, changed, value, label, disabled, ...otherProps } = props;

    const classes: any = [
        'AMB-Radio',
        className,
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

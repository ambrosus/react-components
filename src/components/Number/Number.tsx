import React from 'react';
import { INumber } from '../../interfaces';

import './Number.scss';
import { numWithCommas } from '../utils';

const _Number = (props: INumber) => {

    const { className, value: _value, fixed, delimiter, ...otherProps } = props;

    const classes = [
        'AMB-Number',
        className || '',
    ].join(' ').trim();

    let [value, decimals]: any = String(_value).split('.');
    value = numWithCommas(value, delimiter && delimiter.thousands || ',');
    if (fixed !== false && fixed) {
        decimals = String(Number(`0.${decimals || 0}`).toFixed(fixed || 2)).split('.')[1];
    }

    return (
        <span className={classes} {...otherProps}>
            <span className='value'>{value}</span>
            {decimals && fixed !== 0 && <span className='decimals'>
                {delimiter && delimiter.decimals || '.'}{decimals}
            </span>}
        </span>
    );
};

export default _Number;

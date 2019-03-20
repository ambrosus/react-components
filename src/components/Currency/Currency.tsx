import React from 'react';
import { ICurrency } from '../../interfaces';

import './Currency.scss';
import { numWithCommas } from '../utils';

const Currency = (props: ICurrency) => {

    const { className, symbol, value: _value, fixed, side, ...otherProps } = props;

    const classes = [
        'AMB-Currency',
        className || '',
    ].join(' ').trim();

    const _symbol = symbol || '$';
    let [value, decimals]: any = String(_value).split('.');
    value = numWithCommas(value);
    if (fixed !== false) {
        decimals = String(Number(`0.${decimals || 0}`).toFixed(fixed || 2)).split('.')[1];
    }

    return (
        <span className={classes} {...otherProps}>
            {side === 'left' && <span className='symbol left'>{_symbol}</span>}
            <span className='value'>{value}</span>
            <span className='decimals'>.{decimals}</span>
            {side !== 'left' && <span className='symbol right'>{_symbol}</span>}
        </span>
    );
};

export default Currency;

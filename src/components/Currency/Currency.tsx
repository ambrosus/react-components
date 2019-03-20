import React from 'react';
import { ICurrency } from '../../interfaces';

import './Currency.scss';

const Currency = (props: ICurrency) => {

    const { className, symbol, value, fixed, side, ...otherProps } = props;

    const classes = [
        'AMB-Currency',
        className || '',
    ].join(' ').trim();

    const _symbol = symbol || '$';
    const [_value, decimals] = Number(value).toFixed(fixed || 2).split('.');

    return (
        <span className={classes} {...otherProps}>
            {side === 'left' && <span className='symbol left'>{_symbol}</span>}
            <span className='value'>{_value}</span>
            <span className='decimals'>.{decimals}</span>
            {side !== 'left' && <span className='symbol right'>{_symbol}</span>}
        </span>
    );
};

export default Currency;

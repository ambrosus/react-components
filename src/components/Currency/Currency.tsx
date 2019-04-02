import React from 'react';
import { ICurrency } from '../../interfaces';
import clsx from 'clsx';

import './Currency.scss';
import { Number } from '../';

const Currency = (props: ICurrency) => {

    const { className, symbol, value, fixed, side, delimiter, ...otherProps } = props;

    const classes = clsx('AMB-Currency', className);

    const _symbol = symbol || '$';

    return (
        <span className={classes} {...otherProps}>
            {side === 'left' && <span className='symbol left'>{_symbol}</span>}
            <Number value={value} fixed={fixed} delimiter={delimiter} />
            {side !== 'left' && <span className='symbol right'>{_symbol}</span>}
        </span>
    );
};

export default Currency;

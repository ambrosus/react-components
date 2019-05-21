import React from 'react';
import { ICurrency } from '../../interfaces';
import clsx from 'clsx';

import './Currency.scss';
import { Number } from '../';

const Currency = React.forwardRef((props: ICurrency, ref: any) => {

    const { className, symbol, value, fixed, side, delimiter, ...other } = props;

    const classes = clsx('AMB-Currency', className);

    const _symbol = symbol || '$';

    return (
        <span className={classes}>
            {side === 'left' && <span className='symbol left'>{_symbol}</span>}
            <Number value={value} fixed={fixed} delimiter={delimiter} ref={ref} {...other} />
            {side !== 'left' && <span className='symbol right'>{_symbol}</span>}
        </span>
    );
});

export default Currency;

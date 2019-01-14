import * as React from 'react';

import './Button.scss';
import { IButton } from '../../interfaces';

const Button = (props: IButton) => {
    const defaultClass = 'AMB-Button';
    const classes = props.classes || [];
    const disabled = props.hasOwnProperty('disabled') ? props.disabled : true;

    return <button
        type={props.type || 'button'}
        disabled={props.loading || disabled}
        className={`${defaultClass} ${classes.join(' ')} ${props.loading && 'loading'}`}
        onClick={props.clicked}>{props.children}<div className='spinner'></div></button>;
};

export default Button;

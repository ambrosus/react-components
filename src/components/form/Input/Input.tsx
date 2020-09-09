/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import React, { useState, useRef, useEffect } from 'react';
import { SVG } from '../../utils';
import clsx from 'clsx';

import './Input.scss';
import { IInput } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';
import iconEyeOpen from '../../../assets/svg/eye_open.svg';
import iconEyeClose from '../../../assets/svg/eye_close.svg';

const Input = React.forwardRef((props: IInput, ref: any) => {
    const [type, setType] = useState('text');
    const [touched, setTouched] = useState(false);
    const inputRef: any = useRef(null);

    const { label, check, className, value, onChange, onFocus, onBlur, error, disabled, light, info, placeholder, children, name, ...other }: any = props;

    useEffect(() => setType(other.type || 'text'), []);

    const togglePassword = () => {
        setType(type === 'text' ? 'password' : 'text');
    };

    const _onChange = (event: any) => {
        if (onChange) {
            onChange(event);
        }
    };

    const _onFocus = (event: any) => {
        if (onFocus) {
            onFocus(event);
        }
    };

    const _onBlur = (event: any) => {
        setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };

    const classes = clsx(
        'AMB-Input',
        light && 'light',
        disabled && 'disabled',
        touched && !error && 'valid',
        error && touched && 'error',
        className
    );

    const _value = children && children.toString() || value;

    const meta: any = {
        info,
        check: check && touched && !error && !!String(inputRef && inputRef.current && inputRef.current.value).trim(),
        password: other.type === 'password',
    };

    return (
        <label className={classes}>
            {label && <span className='title'>{label}</span>}
            <div className='input'>
                <input
                    {...other}
                    ref={r => {
                        inputRef.current = r;
                        if (ref && ref.current) {
                            ref.current = r;
                        }
                    }}
                    type={type}
                    value={_value}
                    onChange={_onChange}
                    onFocus={_onFocus}
                    onBlur={_onBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                />
                <div className='border'></div>
                {(meta.info || meta.check || meta.password) && <div className='meta'>
                    {meta.check && <SVG className='SVG' src={iconSuccess} />}
                    {meta.password && (
                        <SVG onClick={togglePassword} className='SVG' src={type === 'password' ? iconEyeOpen : iconEyeClose} />
                    )}
                    {meta.info && (
                        <div className='info'>
                            <SVG className='SVG' src={iconInfo} />
                            <span className='message' dangerouslySetInnerHTML={{ __html: info }}></span>
                        </div>
                    )}
                </div>}
            </div>
            {error && touched && <p className='message'>{error}</p>}
        </label>
    );
});

export default Input;

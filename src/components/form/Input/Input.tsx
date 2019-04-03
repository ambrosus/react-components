/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useRef, useEffect } from 'react';
import { SVG } from '../../utils';

import './Input.scss';
import { IInput } from '../../../interfaces';

import iconSuccess from '../../assets/svg/success.svg';
import iconInfo from '../../assets/svg/info.svg';
import iconEyeOpen from '../../assets/svg/eye_open.svg';
import iconEyeClose from '../../assets/svg/eye_close.svg';

const Input = React.forwardRef((props: IInput, ref: any) => {
    const [type, setType] = useState('text');
    const [touched, setTouched] = useState(false);
    const inputRef: any = useRef(null);

    const { label, check, className, value, onChange, onFocus, onBlur, error, disabled, light, info, placeholder, children, name, ...otherProps }: any = props;

    useEffect(() => setType(otherProps.type || 'text'), []);

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

    const classes: any = [
        'AMB-Input',
        `${light && 'light' || ''}`,
        `${disabled && 'disabled' || ''}`,
        `${touched && !error && 'valid' || ''}`,
        `${className || ''}`.trim(),
    ].filter(Boolean);

    if (error && touched) {
        classes.push('error');
    }

    const _value = children && children.toString() || value;

    const meta: any = {
        info,
        check: check && touched && !error && !!String(inputRef && inputRef.current && inputRef.current.value).trim(),
        password: otherProps.type === 'password',
    };

    return (
        <label className={classes.join(' ').trim()} {...otherProps} ref={ref}>
            {label && <span className='title'>{label}</span>}
            <div className='input'>
                <input
                    ref={inputRef}
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

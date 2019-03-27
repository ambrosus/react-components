/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useCallback, useRef } from 'react';
import { SVG } from '../../utils';

import './Textarea.scss';
import { ITextarea } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';

function Textarea(props: ITextarea) {
    const [touched, setTouched] = useState(false);
    const inputRef: any = useRef(null);

    const onFocus = useCallback(() => setTouched(true), [touched]);

    const { label, check, className, name, value, onChange, children, error, disabled, light, info, ...otherProps }: any = props;

    const classes: any = [
        'AMB-Textarea',
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
    };

    return (
        <label className={classes.join(' ').trim()} {...otherProps}>
            <div className='title'>
                <span>{label}</span>
                {meta.info || meta.check && <div className='meta'>
                    {meta.check && <SVG className='SVG' src={iconSuccess} />}
                    {meta.info && (
                        <div className='info'>
                            <SVG className='SVG' src={iconInfo} />
                            <span className='message' dangerouslySetInnerHTML={{ __html: info }}></span>
                        </div>
                    )}
                </div>}
            </div>
            <div className='textarea'>
                <textarea
                    ref={inputRef}
                    value={_value}
                    onChange={onChange}
                    onFocus={onFocus}
                    spellCheck={false}
                    disabled={disabled}
                    name={name}
                ></textarea>
                <div className='border'></div>
            </div>
            {error && touched && <p className='message'>{error}</p>}
        </label>
    );
}

export default Textarea;

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useCallback, useRef } from 'react';
import { SVG } from '../../utils';
import clsx from 'clsx';

import './Textarea.scss';
import { ITextarea } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';

const Textarea = React.forwardRef((props: ITextarea, ref: any) => {
    const [touched, setTouched] = useState(false);
    const inputRef: any = useRef(null);

    const onFocus = useCallback(() => setTouched(true), [touched]);

    const { label, check, className, name, value, onChange, children, error, disabled, light, info, ...other }: any = props;

    const classes = clsx(
        'AMB-Textarea',
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
    };

    return (
        <label className={classes}>
            <div className='title'>
                <span>{label}</span>
                {(meta.info || meta.check) && <div className='meta'>
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
                    {...other}
                    value={_value}
                    onChange={onChange}
                    onFocus={onFocus}
                    spellCheck={false}
                    disabled={disabled}
                    name={name}
                    ref={r => {
                        inputRef.current = r;
                        if (ref && ref.current) {
                            ref.current = r;
                        }
                    }}
                ></textarea>
                <div className='border'></div>
            </div>
            {error && touched && <p className='message'>{error}</p>}
        </label>
    );
});

export default Textarea;

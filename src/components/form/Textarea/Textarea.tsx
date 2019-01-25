import React from 'react';
import { SVG } from '../../utils';

import './Textarea.scss';
import { ITextarea } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';

const Textarea = (props: ITextarea) => {
    const { label, className, value, changed, invalid, shouldValidate,
        touched, errors, disabled, light, info, ...otherProps } = props;

    const classes: any = [
        'AMB-Textarea',
        `${light && 'light' || ''}`,
        `${touched && !invalid && 'valid' || ''}`,
    ].filter(Boolean);

    if (invalid && shouldValidate && touched) {
        classes.push('error');
    }

    return (
        <label className={classes.join(' ').trim()}>
            {label && <span className='title'>{label}</span>}
            <div className='textarea'>
                <textarea
                    {...otherProps}
                    value={value}
                    onChange={changed}
                    spellCheck={false}
                ></textarea>
                <div className='border'></div>
                <div className='meta'>
                    {touched && !invalid && <SVG className='SVG' src={iconSuccess} />}
                    {info && (
                        <div className='info'>
                            <SVG className='SVG' src={iconInfo} />
                            <span className='message' dangerouslySetInnerHTML={{ __html: info }}></span>
                        </div>
                    )}
                </div>
            </div>
            {invalid && shouldValidate && touched && <p className='message'>{errors}</p>}
        </label>
    );
};

export default Textarea;

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
        `${props.light && 'light' || ''}`,
        `${props.touched && !props.invalid && 'valid' || ''}`,
    ].filter(Boolean);

    if (props.invalid && props.shouldValidate && props.touched) {
        classes.push('error');
    }

    return (
        <label className={classes.join(' ').trim()}>
            {props.label && <span className='title'>{props.label}</span>}
            <div className='textarea'>
                <textarea
                    {...otherProps}
                    value={props.value}
                    onChange={props.changed}
                    spellCheck={false}
                ></textarea>
                <div className='border'></div>
                <div className='meta'>
                    {props.touched && !props.invalid && <SVG className='SVG' src={iconSuccess} />}
                    {props.info && (
                        <div className='info'>
                            <SVG className='SVG' src={iconInfo} />
                            <span className='message' dangerouslySetInnerHTML={{ __html: props.info }}></span>
                        </div>
                    )}
                </div>
            </div>
            {props.invalid && props.shouldValidate && props.touched && <p className='message'>{props.errors}</p>}
        </label>
    );
};

export default Textarea;

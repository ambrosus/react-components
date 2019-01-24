import React, { Component } from 'react';
import { SVG } from '../../utils';

import './Input.scss';
import { IInput } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';
import iconEyeOpen from '../../../assets/svg/eye_open.svg';
import iconEyeClose from '../../../assets/svg/eye_close.svg';

export default class Input extends Component<IInput> {
    public state: any = {
        type: 'text',
        otherProps: {},
    };

    constructor(props: IInput) {
        super(props);
    }

    public componentDidMount() {
        const {
            label, className, value, changed, invalid, shouldValidate,
            touched, errors, disabled, light, info, ...otherProps } = this.props;
        const type = otherProps.type || 'text';
        this.setState({ type, otherProps });
    }

    private togglePassword = () => {
        this.setState({ type: this.state.type === 'text' ? 'password' : 'text' });
    }

    public render() {
        const classes: any = [
            'AMB-Input',
            `${this.props.light && 'light' || ''}`,
            `${this.props.touched && !this.props.invalid && 'valid' || ''}`,
        ].filter(Boolean);

        if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
            classes.push('error');
        }

        return (
            <label className={classes.join(' ').trim()}>
                {this.props.label && <span className='title'>{this.props.label}</span>}
                <div className='input'>
                    <input
                        {...this.state.otherProps}
                        type={this.state.type}
                        value={this.props.value}
                        onChange={this.props.changed}
                    />
                    <div className='border'></div>
                    <div className='meta'>
                        {this.props.touched && !this.props.invalid && <SVG className='SVG' src={iconSuccess} />}
                        {this.props.type === 'password' && (
                            <SVG onClick={this.togglePassword} className='SVG' src={this.state.type === 'password' ? iconEyeOpen : iconEyeClose} />
                        )}
                        {this.props.info && (
                            <div className='info'>
                                <SVG className='SVG' src={iconInfo} />
                                <span className='message' dangerouslySetInnerHTML={{ __html: this.props.info }}></span>
                            </div>
                        )}
                    </div>
                </div>
                {this.props.invalid && this.props.shouldValidate && this.props.touched && <p className='message'>{this.props.errors}</p>}
            </label>
        );
    }
}

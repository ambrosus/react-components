import React, { Component } from 'react';
import SVG from 'react-svg';

import './Checbox.scss';
import { ICheckbox } from '../../interfaces';

export default class Checkbox extends Component<ICheckbox> {
    public static defaultProps: ICheckbox = {
        disabled: false,
        checkedIcon: '',
        uncheckedIcon: '',
        labelPosition: 'left',
        checked: false,
        onChange: () => {},
    };

    public render() {
        const {label, labelPosition, icon, type, className, ...otherProps } = this.props;
        const classes = ['AMB-Button', className].join(' ').trim();

        return (
            <span>
                {icon && <SVG className='Sideicon' src={icon} wrapper='span' />}
                {labelPosition && labelPosition === 'left' && labelPosition}
                <input type='checkbox' className={classes} {...otherProps} />
                {labelPosition && labelPosition === 'right' && labelPosition}
            </span>
            );
    }
}

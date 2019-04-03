import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import * as React from 'react';
import { SVG } from '../../utils';
import iconSpinner from '../../../assets/svg/spinner.svg';
import './Button.scss';

var _ref = React.createElement(SVG, {
  className: "spinner SVG",
  src: iconSpinner
});

const Button = props => {
  const {
    label,
    children,
    icon,
    loading,
    className,
    type,
    disabled,
    solid,
    outline,
    transparent,
    primary,
    secondary,
    light
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["label", "children", "icon", "loading", "className", "type", "disabled", "solid", "outline", "transparent", "primary", "secondary", "light"]);

  const buttonType = [`${solid && 'solid' || ''}`, `${outline && 'outline' || ''}`, `${transparent && 'transparent' || ''}`].filter(Boolean)[0];
  const color = [`${primary && 'primary' || ''}`, `${secondary && 'secondary' || ''}`, `${light && 'light' || ''}`].filter(Boolean)[0];
  const options = [`${loading && 'loading' || ''}`].filter(Boolean);
  const classes = ['AMB-Button', ...options, buttonType || 'solid', color || 'primary', `${className || ''}`.trim()].join(' ').trim();
  return React.createElement("button", _extends({}, otherProps, {
    type: type || 'button',
    disabled: loading || disabled,
    className: classes
  }), icon && React.createElement(SVG, {
    className: "icon SVG",
    src: icon
  }), label, children, loading && _ref);
};

export default Button;
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { SVG } from '../../utils';
import './Checkbox.scss';
import iconSuccess from '../../../assets/svg/success.svg';

var _ref = React.createElement(SVG, {
  className: "SVG icon",
  src: iconSuccess
});

const Checkbox = props => {
  const {
    label,
    className,
    value,
    disabled,
    checked,
    onChange,
    children,
    light,
    name
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["label", "className", "value", "disabled", "checked", "onChange", "children", "light", "name"]);

  const classes = ['AMB-Checkbox', `${light && 'light' || ''}`, `${disabled && 'disabled' || ''}`, `${className || ''}`.trim()].filter(Boolean);
  return React.createElement("div", _extends({
    className: classes.join(' ').trim()
  }, otherProps), React.createElement("label", null, React.createElement("div", {
    className: "checkbox"
  }, React.createElement("input", {
    type: "checkbox",
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    name: name
  }), _ref)), (children || label) && React.createElement("span", {
    className: "label"
  }, children || label));
};

export default Checkbox;
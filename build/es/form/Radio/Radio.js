import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import './Radio.scss';

var _ref = React.createElement("div", {
  className: "radio"
});

const Radio = props => {
  const {
    className,
    name,
    light,
    onChange,
    value,
    label,
    children,
    disabled
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["className", "name", "checked", "light", "onChange", "value", "label", "children", "disabled"]);

  const classes = ['AMB-Radio', `${className || ''}`.trim(), `${light && 'light' || ''}`, `${disabled && 'disabled' || ''}`].filter(Boolean);
  return React.createElement("label", _extends({
    className: classes.join(' ').trim()
  }, otherProps), React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled
  }), _ref, React.createElement("span", {
    className: "label"
  }, children || label || value));
};

export default Radio;
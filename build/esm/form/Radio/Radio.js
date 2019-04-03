import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import './Radio.scss';

var _ref = React.createElement("div", {
  className: "radio"
});

var Radio = function Radio(props) {
  var className = props.className,
      name = props.name,
      checked = props.checked,
      light = props.light,
      onChange = props.onChange,
      value = props.value,
      label = props.label,
      children = props.children,
      disabled = props.disabled,
      otherProps = _objectWithoutProperties(props, ["className", "name", "checked", "light", "onChange", "value", "label", "children", "disabled"]);

  var classes = ['AMB-Radio', "".concat(className || '').trim(), "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || '')].filter(Boolean);
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
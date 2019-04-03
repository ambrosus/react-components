import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import './Switch.scss';

var _ref = React.createElement("div", {
  className: "switch"
});

var Switch = function Switch(props) {
  var label = props.label,
      className = props.className,
      value = props.value,
      name = props.name,
      checked = props.checked,
      disabled = props.disabled,
      onChange = props.onChange,
      children = props.children,
      light = props.light,
      otherProps = _objectWithoutProperties(props, ["label", "className", "value", "name", "checked", "disabled", "onChange", "children", "light"]);

  var classes = ['AMB-Switch', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(className || '').trim()].filter(Boolean);
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

export default Switch;
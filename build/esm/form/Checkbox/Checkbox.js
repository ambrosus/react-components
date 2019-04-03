import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

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

var Checkbox = function Checkbox(props) {
  var label = props.label,
      className = props.className,
      value = props.value,
      disabled = props.disabled,
      checked = props.checked,
      onChange = props.onChange,
      children = props.children,
      light = props.light,
      name = props.name,
      otherProps = _objectWithoutProperties(props, ["label", "className", "value", "disabled", "checked", "onChange", "children", "light", "name"]);

  var classes = ['AMB-Checkbox', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(className || '').trim()].filter(Boolean);
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
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./Radio.scss");

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
var _ref = _react.default.createElement("div", {
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
      otherProps = (0, _objectWithoutProperties2.default)(props, ["className", "name", "checked", "light", "onChange", "value", "label", "children", "disabled"]);
  var classes = ['AMB-Radio', "".concat(className || '').trim(), "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || '')].filter(Boolean);
  return _react.default.createElement("label", (0, _extends2.default)({
    className: classes.join(' ').trim()
  }, otherProps), _react.default.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled
  }), _ref, _react.default.createElement("span", {
    className: "label"
  }, children || label || value));
};

var _default = Radio;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./Switch.scss");

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
var _ref = _react.default.createElement("div", {
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
      otherProps = (0, _objectWithoutProperties2.default)(props, ["label", "className", "value", "name", "checked", "disabled", "onChange", "children", "light"]);
  var classes = ['AMB-Switch', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(className || '').trim()].filter(Boolean);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: classes.join(' ').trim()
  }, otherProps), _react.default.createElement("label", null, _react.default.createElement("div", {
    className: "checkbox"
  }, _react.default.createElement("input", {
    type: "checkbox",
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    name: name
  }), _ref)), (children || label) && _react.default.createElement("span", {
    className: "label"
  }, children || label));
};

var _default = Switch;
exports.default = _default;
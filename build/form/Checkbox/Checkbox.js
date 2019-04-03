"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("./Checkbox.scss");

var _success = _interopRequireDefault(require("../../../assets/svg/success.svg"));

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
var _ref = _react.default.createElement(_utils.SVG, {
  className: "SVG icon",
  src: _success.default
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
      otherProps = (0, _objectWithoutProperties2.default)(props, ["label", "className", "value", "disabled", "checked", "onChange", "children", "light", "name"]);
  var classes = ['AMB-Checkbox', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(className || '').trim()].filter(Boolean);
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

var _default = Checkbox;
exports.default = _default;
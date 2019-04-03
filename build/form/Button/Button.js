"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _spinner = _interopRequireDefault(require("../../../assets/svg/spinner.svg"));

require("./Button.scss");

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
var _ref = React.createElement(_utils.SVG, {
  className: "spinner SVG",
  src: _spinner.default
});

var Button = function Button(props) {
  var label = props.label,
      children = props.children,
      icon = props.icon,
      loading = props.loading,
      className = props.className,
      type = props.type,
      disabled = props.disabled,
      solid = props.solid,
      outline = props.outline,
      transparent = props.transparent,
      primary = props.primary,
      secondary = props.secondary,
      light = props.light,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["label", "children", "icon", "loading", "className", "type", "disabled", "solid", "outline", "transparent", "primary", "secondary", "light"]);
  var buttonType = ["".concat(solid && 'solid' || ''), "".concat(outline && 'outline' || ''), "".concat(transparent && 'transparent' || '')].filter(Boolean)[0];
  var color = ["".concat(primary && 'primary' || ''), "".concat(secondary && 'secondary' || ''), "".concat(light && 'light' || '')].filter(Boolean)[0];
  var options = ["".concat(loading && 'loading' || '')].filter(Boolean);
  var classes = ['AMB-Button'].concat((0, _toConsumableArray2.default)(options), [buttonType || 'solid', color || 'primary', "".concat(className || '').trim()]).join(' ').trim();
  return React.createElement("button", (0, _extends2.default)({}, otherProps, {
    type: type || 'button',
    disabled: loading || disabled,
    className: classes
  }), icon && React.createElement(_utils.SVG, {
    className: "icon SVG",
    src: icon
  }), label, children, loading && _ref);
};

var _default = Button;
exports.default = _default;
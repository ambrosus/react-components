"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

require("./Textarea.scss");

var _success = _interopRequireDefault(require("../../../assets/svg/success.svg"));

var _info = _interopRequireDefault(require("../../../assets/svg/info.svg"));

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
var _ref = _react.default.createElement(_utils.SVG, {
  className: "SVG",
  src: _success.default
});

var _ref2 = _react.default.createElement(_utils.SVG, {
  className: "SVG",
  src: _info.default
});

var _ref3 = _react.default.createElement("div", {
  className: "border"
});

function Textarea(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      touched = _useState2[0],
      setTouched = _useState2[1];

  var inputRef = (0, _react.useRef)(null);
  var onFocus = (0, _react.useCallback)(function () {
    return setTouched(true);
  }, [touched]);
  var label = props.label,
      check = props.check,
      className = props.className,
      name = props.name,
      value = props.value,
      onChange = props.onChange,
      children = props.children,
      error = props.error,
      disabled = props.disabled,
      light = props.light,
      info = props.info,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["label", "check", "className", "name", "value", "onChange", "children", "error", "disabled", "light", "info"]);
  var classes = ['AMB-Textarea', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(touched && !error && 'valid' || ''), "".concat(className || '').trim()].filter(Boolean);

  if (error && touched) {
    classes.push('error');
  }

  var _value = children && children.toString() || value;

  var meta = {
    info: info,
    check: check && touched && !error && !!String(inputRef && inputRef.current && inputRef.current.value).trim()
  };
  return _react.default.createElement("label", (0, _extends2.default)({
    className: classes.join(' ').trim()
  }, otherProps), _react.default.createElement("div", {
    className: "title"
  }, _react.default.createElement("span", null, label), (meta.info || meta.check) && _react.default.createElement("div", {
    className: "meta"
  }, meta.check && _ref, meta.info && _react.default.createElement("div", {
    className: "info"
  }, _ref2, _react.default.createElement("span", {
    className: "message",
    dangerouslySetInnerHTML: {
      __html: info
    }
  })))), _react.default.createElement("div", {
    className: "textarea"
  }, _react.default.createElement("textarea", {
    ref: inputRef,
    value: _value,
    onChange: onChange,
    onFocus: onFocus,
    spellCheck: false,
    disabled: disabled,
    name: name
  }), _ref3), error && touched && _react.default.createElement("p", {
    className: "message"
  }, error));
}

var _default = Textarea;
exports.default = _default;
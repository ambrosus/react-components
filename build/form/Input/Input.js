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

require("./Input.scss");

var _success = _interopRequireDefault(require("../../../assets/svg/success.svg"));

var _info = _interopRequireDefault(require("../../../assets/svg/info.svg"));

var _eye_open = _interopRequireDefault(require("../../../assets/svg/eye_open.svg"));

var _eye_close = _interopRequireDefault(require("../../../assets/svg/eye_close.svg"));

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
var _ref = _react.default.createElement("div", {
  className: "border"
});

var _ref2 = _react.default.createElement(_utils.SVG, {
  className: "SVG",
  src: _success.default
});

var _ref3 = _react.default.createElement(_utils.SVG, {
  className: "SVG",
  src: _info.default
});

var Input = _react.default.forwardRef(function (props, ref) {
  var _useState = (0, _react.useState)('text'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      touched = _useState4[0],
      setTouched = _useState4[1];

  var inputRef = (0, _react.useRef)(null);
  var label = props.label,
      check = props.check,
      className = props.className,
      value = props.value,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      error = props.error,
      disabled = props.disabled,
      light = props.light,
      info = props.info,
      placeholder = props.placeholder,
      children = props.children,
      name = props.name,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["label", "check", "className", "value", "onChange", "onFocus", "onBlur", "error", "disabled", "light", "info", "placeholder", "children", "name"]);
  (0, _react.useEffect)(function () {
    return setType(otherProps.type || 'text');
  }, []);

  var togglePassword = function togglePassword() {
    setType(type === 'text' ? 'password' : 'text');
  };

  var _onChange = function _onChange(event) {
    if (onChange) {
      onChange(event);
    }
  };

  var _onFocus = function _onFocus(event) {
    if (onFocus) {
      onFocus(event);
    }
  };

  var _onBlur = function _onBlur(event) {
    setTouched(true);

    if (onBlur) {
      onBlur(event);
    }
  };

  var classes = ['AMB-Input', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(touched && !error && 'valid' || ''), "".concat(className || '').trim()].filter(Boolean);

  if (error && touched) {
    classes.push('error');
  }

  var _value = children && children.toString() || value;

  var meta = {
    info: info,
    check: check && touched && !error && !!String(inputRef && inputRef.current && inputRef.current.value).trim(),
    password: otherProps.type === 'password'
  };
  return _react.default.createElement("label", (0, _extends2.default)({
    className: classes.join(' ').trim()
  }, otherProps, {
    ref: ref
  }), label && _react.default.createElement("span", {
    className: "title"
  }, label), _react.default.createElement("div", {
    className: "input"
  }, _react.default.createElement("input", {
    ref: inputRef,
    type: type,
    value: _value,
    onChange: _onChange,
    onFocus: _onFocus,
    onBlur: _onBlur,
    placeholder: placeholder,
    disabled: disabled,
    name: name
  }), _ref, (meta.info || meta.check || meta.password) && _react.default.createElement("div", {
    className: "meta"
  }, meta.check && _ref2, meta.password && _react.default.createElement(_utils.SVG, {
    onClick: togglePassword,
    className: "SVG",
    src: type === 'password' ? _eye_open.default : _eye_close.default
  }), meta.info && _react.default.createElement("div", {
    className: "info"
  }, _ref3, _react.default.createElement("span", {
    className: "message",
    dangerouslySetInnerHTML: {
      __html: info
    }
  })))), error && touched && _react.default.createElement("p", {
    className: "message"
  }, error));
});

var _default = Input;
exports.default = _default;
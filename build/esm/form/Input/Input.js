import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useRef, useEffect } from 'react';
import { SVG } from '../../utils';
import './Input.scss';
import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';
import iconEyeOpen from '../../../assets/svg/eye_open.svg';
import iconEyeClose from '../../../assets/svg/eye_close.svg';

var _ref = React.createElement("div", {
  className: "border"
});

var _ref2 = React.createElement(SVG, {
  className: "SVG",
  src: iconSuccess
});

var _ref3 = React.createElement(SVG, {
  className: "SVG",
  src: iconInfo
});

var Input = React.forwardRef(function (props, ref) {
  var _useState = useState('text'),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      touched = _useState4[0],
      setTouched = _useState4[1];

  var inputRef = useRef(null);

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
      otherProps = _objectWithoutProperties(props, ["label", "check", "className", "value", "onChange", "onFocus", "onBlur", "error", "disabled", "light", "info", "placeholder", "children", "name"]);

  useEffect(function () {
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
  return React.createElement("label", _extends({
    className: classes.join(' ').trim()
  }, otherProps, {
    ref: ref
  }), label && React.createElement("span", {
    className: "title"
  }, label), React.createElement("div", {
    className: "input"
  }, React.createElement("input", {
    ref: inputRef,
    type: type,
    value: _value,
    onChange: _onChange,
    onFocus: _onFocus,
    onBlur: _onBlur,
    placeholder: placeholder,
    disabled: disabled,
    name: name
  }), _ref, (meta.info || meta.check || meta.password) && React.createElement("div", {
    className: "meta"
  }, meta.check && _ref2, meta.password && React.createElement(SVG, {
    onClick: togglePassword,
    className: "SVG",
    src: type === 'password' ? iconEyeOpen : iconEyeClose
  }), meta.info && React.createElement("div", {
    className: "info"
  }, _ref3, React.createElement("span", {
    className: "message",
    dangerouslySetInnerHTML: {
      __html: info
    }
  })))), error && touched && React.createElement("p", {
    className: "message"
  }, error));
});
export default Input;
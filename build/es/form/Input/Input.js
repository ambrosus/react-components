import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

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

const Input = React.forwardRef((props, ref) => {
  const [type, setType] = useState('text');
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);

  const {
    label,
    check,
    className,
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    disabled,
    light,
    info,
    placeholder,
    children,
    name
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["label", "check", "className", "value", "onChange", "onFocus", "onBlur", "error", "disabled", "light", "info", "placeholder", "children", "name"]);

  useEffect(() => setType(otherProps.type || 'text'), []);

  const togglePassword = () => {
    setType(type === 'text' ? 'password' : 'text');
  };

  const _onChange = event => {
    if (onChange) {
      onChange(event);
    }
  };

  const _onFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
  };

  const _onBlur = event => {
    setTouched(true);

    if (onBlur) {
      onBlur(event);
    }
  };

  const classes = ['AMB-Input', `${light && 'light' || ''}`, `${disabled && 'disabled' || ''}`, `${touched && !error && 'valid' || ''}`, `${className || ''}`.trim()].filter(Boolean);

  if (error && touched) {
    classes.push('error');
  }

  const _value = children && children.toString() || value;

  const meta = {
    info,
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
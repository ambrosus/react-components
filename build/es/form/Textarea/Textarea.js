import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useCallback, useRef } from 'react';
import { SVG } from '../../utils';
import './Textarea.scss';
import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';

var _ref = React.createElement(SVG, {
  className: "SVG",
  src: iconSuccess
});

var _ref2 = React.createElement(SVG, {
  className: "SVG",
  src: iconInfo
});

var _ref3 = React.createElement("div", {
  className: "border"
});

function Textarea(props) {
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);
  const onFocus = useCallback(() => setTouched(true), [touched]);

  const {
    label,
    check,
    className,
    name,
    value,
    onChange,
    children,
    error,
    disabled,
    light,
    info
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["label", "check", "className", "name", "value", "onChange", "children", "error", "disabled", "light", "info"]);

  const classes = ['AMB-Textarea', `${light && 'light' || ''}`, `${disabled && 'disabled' || ''}`, `${touched && !error && 'valid' || ''}`, `${className || ''}`.trim()].filter(Boolean);

  if (error && touched) {
    classes.push('error');
  }

  const _value = children && children.toString() || value;

  const meta = {
    info,
    check: check && touched && !error && !!String(inputRef && inputRef.current && inputRef.current.value).trim()
  };
  return React.createElement("label", _extends({
    className: classes.join(' ').trim()
  }, otherProps), React.createElement("div", {
    className: "title"
  }, React.createElement("span", null, label), (meta.info || meta.check) && React.createElement("div", {
    className: "meta"
  }, meta.check && _ref, meta.info && React.createElement("div", {
    className: "info"
  }, _ref2, React.createElement("span", {
    className: "message",
    dangerouslySetInnerHTML: {
      __html: info
    }
  })))), React.createElement("div", {
    className: "textarea"
  }, React.createElement("textarea", {
    ref: inputRef,
    value: _value,
    onChange: onChange,
    onFocus: onFocus,
    spellCheck: false,
    disabled: disabled,
    name: name
  }), _ref3), error && touched && React.createElement("p", {
    className: "message"
  }, error));
}

export default Textarea;
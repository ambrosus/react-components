import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

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
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      touched = _useState2[0],
      setTouched = _useState2[1];

  var inputRef = useRef(null);
  var onFocus = useCallback(function () {
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
      otherProps = _objectWithoutProperties(props, ["label", "check", "className", "name", "value", "onChange", "children", "error", "disabled", "light", "info"]);

  var classes = ['AMB-Textarea', "".concat(light && 'light' || ''), "".concat(disabled && 'disabled' || ''), "".concat(touched && !error && 'valid' || ''), "".concat(className || '').trim()].filter(Boolean);

  if (error && touched) {
    classes.push('error');
  }

  var _value = children && children.toString() || value;

  var meta = {
    info: info,
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
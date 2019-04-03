import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import * as React from 'react';
import { SVG } from '../../utils';
import iconSpinner from '../../../assets/svg/spinner.svg';
import './Button.scss';

var _ref = React.createElement(SVG, {
  className: "spinner SVG",
  src: iconSpinner
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
      otherProps = _objectWithoutProperties(props, ["label", "children", "icon", "loading", "className", "type", "disabled", "solid", "outline", "transparent", "primary", "secondary", "light"]);

  var buttonType = ["".concat(solid && 'solid' || ''), "".concat(outline && 'outline' || ''), "".concat(transparent && 'transparent' || '')].filter(Boolean)[0];
  var color = ["".concat(primary && 'primary' || ''), "".concat(secondary && 'secondary' || ''), "".concat(light && 'light' || '')].filter(Boolean)[0];
  var options = ["".concat(loading && 'loading' || '')].filter(Boolean);
  var classes = ['AMB-Button'].concat(_toConsumableArray(options), [buttonType || 'solid', color || 'primary', "".concat(className || '').trim()]).join(' ').trim();
  return React.createElement("button", _extends({}, otherProps, {
    type: type || 'button',
    disabled: loading || disabled,
    className: classes
  }), icon && React.createElement(SVG, {
    className: "icon SVG",
    src: icon
  }), label, children, loading && _ref);
};

export default Button;
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import './Currency.scss';
import Number from '../Number';

const Currency = props => {
  const {
    className,
    symbol,
    value,
    fixed,
    side,
    delimiter
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["className", "symbol", "value", "fixed", "side", "delimiter"]);

  const classes = ['AMB-Currency', className || ''].join(' ').trim();

  const _symbol = symbol || '$';

  return React.createElement("span", _extends({
    className: classes
  }, otherProps), side === 'left' && React.createElement("span", {
    className: "symbol left"
  }, _symbol), React.createElement(Number, {
    value: value,
    fixed: fixed,
    delimiter: delimiter
  }), side !== 'left' && React.createElement("span", {
    className: "symbol right"
  }, _symbol));
};

export default Currency;
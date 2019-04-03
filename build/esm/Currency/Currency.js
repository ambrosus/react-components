import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import './Currency.scss';
import Number from '../Number';

var Currency = function Currency(props) {
  var className = props.className,
      symbol = props.symbol,
      value = props.value,
      fixed = props.fixed,
      side = props.side,
      delimiter = props.delimiter,
      otherProps = _objectWithoutProperties(props, ["className", "symbol", "value", "fixed", "side", "delimiter"]);

  var classes = ['AMB-Currency', className || ''].join(' ').trim();

  var _symbol = symbol || '$';

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
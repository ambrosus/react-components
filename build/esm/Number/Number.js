import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import './Number.scss';
import { numWithCommas } from '../utils';

var _Number = function _Number(props) {
  var className = props.className,
      _value = props.value,
      fixed = props.fixed,
      delimiter = props.delimiter,
      otherProps = _objectWithoutProperties(props, ["className", "value", "fixed", "delimiter"]);

  var classes = ['AMB-Number', className || ''].join(' ').trim();

  var _String$split = String(_value).split('.'),
      _String$split2 = _slicedToArray(_String$split, 2),
      value = _String$split2[0],
      decimals = _String$split2[1];

  value = numWithCommas(value, delimiter && delimiter.thousands || ',');

  if (fixed !== false && fixed) {
    decimals = String(Number("0.".concat(decimals || 0)).toFixed(fixed || 2)).split('.')[1];
  }

  return React.createElement("span", _extends({
    className: classes
  }, otherProps), React.createElement("span", {
    className: "value"
  }, value), decimals && fixed !== 0 && React.createElement("span", {
    className: "decimals"
  }, delimiter && delimiter.decimals || '.', decimals));
};

export default _Number;
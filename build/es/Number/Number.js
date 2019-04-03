import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import './Number.scss';
import { numWithCommas } from '../utils';

const _Number = props => {
  const {
    className,
    value: _value,
    fixed,
    delimiter
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["className", "value", "fixed", "delimiter"]);

  const classes = ['AMB-Number', className || ''].join(' ').trim();
  let [value, decimals] = String(_value).split('.');
  value = numWithCommas(value, delimiter && delimiter.thousands || ',');

  if (fixed !== false && fixed) {
    decimals = String(Number(`0.${decimals || 0}`).toFixed(fixed || 2)).split('.')[1];
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
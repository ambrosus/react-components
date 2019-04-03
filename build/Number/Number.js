"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./Number.scss");

var _utils = require("../utils");

var _Number = function _Number(props) {
  var className = props.className,
      _value = props.value,
      fixed = props.fixed,
      delimiter = props.delimiter,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["className", "value", "fixed", "delimiter"]);
  var classes = ['AMB-Number', className || ''].join(' ').trim();

  var _String$split = String(_value).split('.'),
      _String$split2 = (0, _slicedToArray2.default)(_String$split, 2),
      value = _String$split2[0],
      decimals = _String$split2[1];

  value = (0, _utils.numWithCommas)(value, delimiter && delimiter.thousands || ',');

  if (fixed !== false && fixed) {
    decimals = String(Number("0.".concat(decimals || 0)).toFixed(fixed || 2)).split('.')[1];
  }

  return _react.default.createElement("span", (0, _extends2.default)({
    className: classes
  }, otherProps), _react.default.createElement("span", {
    className: "value"
  }, value), decimals && fixed !== 0 && _react.default.createElement("span", {
    className: "decimals"
  }, delimiter && delimiter.decimals || '.', decimals));
};

var _default = _Number;
exports.default = _default;
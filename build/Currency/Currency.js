"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./Currency.scss");

var _Number = _interopRequireDefault(require("../Number"));

var Currency = function Currency(props) {
  var className = props.className,
      symbol = props.symbol,
      value = props.value,
      fixed = props.fixed,
      side = props.side,
      delimiter = props.delimiter,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["className", "symbol", "value", "fixed", "side", "delimiter"]);
  var classes = ['AMB-Currency', className || ''].join(' ').trim();

  var _symbol = symbol || '$';

  return _react.default.createElement("span", (0, _extends2.default)({
    className: classes
  }, otherProps), side === 'left' && _react.default.createElement("span", {
    className: "symbol left"
  }, _symbol), _react.default.createElement(_Number.default, {
    value: value,
    fixed: fixed,
    delimiter: delimiter
  }), side !== 'left' && _react.default.createElement("span", {
    className: "symbol right"
  }, _symbol));
};

var _default = Currency;
exports.default = _default;
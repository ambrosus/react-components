"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useForm(validate) {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      valid = _useState6[0],
      setValid = _useState6[1];

  (0, _react.useEffect)(function () {
    setValid(Object.keys(errors).length === 0);
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _errors = validate(values);

    if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
      setErrors(_errors);
    }
  }, [values]);

  var onBlur = function onBlur(event) {
    event.persist();

    var _values = (0, _extends3.default)({}, values, (0, _defineProperty2.default)({}, event.target.name, event.target.value));

    if (JSON.stringify(values) !== JSON.stringify(_values)) {
      setValues(_values);
    }

    var _errors = validate(_values);

    if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
      setErrors(_errors);
    }
  };

  return {
    values: values,
    errors: errors,
    valid: valid,
    onBlur: onBlur
  };
}

var _default = useForm;
exports.default = _default;
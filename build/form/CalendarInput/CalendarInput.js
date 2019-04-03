"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _reactCalendar = _interopRequireDefault(require("react-calendar"));

require("./CalendarInput.scss");

var _Input = _interopRequireDefault(require("../Input"));

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
function CalendarInput(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      calendar = _useState2[0],
      setCalendar = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  var inputRef = (0, _react.useRef)(null);
  var calendarRef = (0, _react.useRef)(null);
  var daterange = props.daterange,
      value = props.value,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["daterange", "value", "onChange", "onFocus", "onBlur"]);

  var onChoose = function onChoose(_date) {
    if (!!daterange) {
      setDate("".concat((0, _utils.formatDate)(new Date(_date[0].toString())), " - ").concat((0, _utils.formatDate)(new Date(_date[1].toString()))));
    } else {
      setDate((0, _utils.formatDate)(new Date(_date.toString())));
    }

    closeCalendar();
  };

  var _onChange = function _onChange(event) {
    setDate(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  var handleClickOutsideCalendar = function handleClickOutsideCalendar(event) {
    if (calendarRef && calendarRef.current && !inputRef.current.contains(event.target) && !calendarRef.current.contains(event.target) && !event.target.classList.contains('react-calendar__tile')) {
      closeCalendar();
    }
  };

  var openCalendar = function openCalendar() {
    setCalendar(true);
    window.addEventListener('click', handleClickOutsideCalendar);
  };

  var closeCalendar = function closeCalendar() {
    setCalendar(false);
    window.removeEventListener('click', handleClickOutsideCalendar);
  };

  var _placeholder = (0, _utils.formatDate)(new Date());

  return _react.default.createElement("div", {
    className: "AMB-CalendarInput"
  }, _react.default.createElement(_Input.default, (0, _extends2.default)({}, otherProps, {
    value: date,
    placeholder: _placeholder,
    onChange: _onChange,
    onClick: function onClick() {
      return !otherProps.disabled && openCalendar();
    },
    ref: inputRef
  })), calendar && _react.default.createElement("div", {
    className: "calendar",
    ref: calendarRef
  }, _react.default.createElement(_reactCalendar.default, {
    onChange: onChoose,
    selectRange: !!daterange
  })));
}

var _default = CalendarInput;
exports.default = _default;
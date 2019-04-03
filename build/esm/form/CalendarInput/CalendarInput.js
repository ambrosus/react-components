import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useRef } from 'react';
import { formatDate } from '../../utils';
import Calendar from 'react-calendar';
import './CalendarInput.scss';
import Input from '../Input';

function CalendarInput(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      calendar = _useState2[0],
      setCalendar = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  var inputRef = useRef(null);
  var calendarRef = useRef(null);

  var daterange = props.daterange,
      value = props.value,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      otherProps = _objectWithoutProperties(props, ["daterange", "value", "onChange", "onFocus", "onBlur"]);

  var onChoose = function onChoose(_date) {
    if (!!daterange) {
      setDate("".concat(formatDate(new Date(_date[0].toString())), " - ").concat(formatDate(new Date(_date[1].toString()))));
    } else {
      setDate(formatDate(new Date(_date.toString())));
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

  var _placeholder = formatDate(new Date());

  return React.createElement("div", {
    className: "AMB-CalendarInput"
  }, React.createElement(Input, _extends({}, otherProps, {
    value: date,
    placeholder: _placeholder,
    onChange: _onChange,
    onClick: function onClick() {
      return !otherProps.disabled && openCalendar();
    },
    ref: inputRef
  })), calendar && React.createElement("div", {
    className: "calendar",
    ref: calendarRef
  }, React.createElement(Calendar, {
    onChange: onChoose,
    selectRange: !!daterange
  })));
}

export default CalendarInput;
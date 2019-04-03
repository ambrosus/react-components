import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

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
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState('');
  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  const {
    daterange,
    onChange
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["daterange", "value", "onChange", "onFocus", "onBlur"]);

  const onChoose = _date => {
    if (!!daterange) {
      setDate(`${formatDate(new Date(_date[0].toString()))} - ${formatDate(new Date(_date[1].toString()))}`);
    } else {
      setDate(formatDate(new Date(_date.toString())));
    }

    closeCalendar();
  };

  const _onChange = event => {
    setDate(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  const handleClickOutsideCalendar = event => {
    if (calendarRef && calendarRef.current && !inputRef.current.contains(event.target) && !calendarRef.current.contains(event.target) && !event.target.classList.contains('react-calendar__tile')) {
      closeCalendar();
    }
  };

  const openCalendar = () => {
    setCalendar(true);
    window.addEventListener('click', handleClickOutsideCalendar);
  };

  const closeCalendar = () => {
    setCalendar(false);
    window.removeEventListener('click', handleClickOutsideCalendar);
  };

  const _placeholder = formatDate(new Date());

  return React.createElement("div", {
    className: "AMB-CalendarInput"
  }, React.createElement(Input, _extends({}, otherProps, {
    value: date,
    placeholder: _placeholder,
    onChange: _onChange,
    onClick: () => !otherProps.disabled && openCalendar(),
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
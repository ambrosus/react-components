/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useRef, useEffect } from 'react';
import { formatDate } from '../../utils';
import Calendar from 'react-calendar';
import clsx from 'clsx';

import './CalendarInput.scss';
import { ICalendarInput } from '../../../interfaces';

import { Input, Button } from '../';

function CalendarInput(props: ICalendarInput) {
  const [calendar, setCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState<any>(undefined);
  const inputRef: any = useRef(null);
  const calendarRef: any = useRef(null);

  const {
    maxDate,
    minDate,
    daterange,
    value,
    onChange,
    onFocus,
    onBlur,
    ...other } = props;

  const onChoose = (_date: Date | Date[]) => {
    if (Array.isArray(_date)) {
      _date[1].setHours(0);
      _date[1].setMinutes(0);
      _date[1].setSeconds(0);
      _date[1].setMilliseconds(0);
      if (_date[0].getTime() === _date[1].getTime()) {
        _date = _date[0];
      }
    }
    setCalendarValue(_date);
  };

  const onClickDay = (_date: Date) => {
    if (!!daterange) {
      setCalendarValue(_date);
    }
  };

  const _onChange = (event: any) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  useEffect(() => {
    if (value) {
      setValue(value);
    } else {
      setCalendarValue(undefined);
    }
  }, [value]);

  const setValue = (_date: any) => {
    let temp: any = _date.split('-');
    temp = [new Date(temp[0]), new Date(temp[1])];
    if (!isValidDate(temp[0])) {
      temp[0] = undefined;
    }
    if (!isValidDate(temp[1])) {
      temp[1] = undefined;
    }
    setCalendarValue(temp);
  };

  const handleClickOutsideCalendar = (event: any) => {
    if (
      calendarRef &&
      calendarRef.current &&
      !inputRef.current.contains(event.target) &&
      !calendarRef.current.contains(event.target) &&
      !event.target.classList.contains('react-calendar__tile')
    ) {
      if (value) {
        setValue(value);
      }
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

  function isValidDate(d: Date) {
    return d instanceof Date && !isNaN(d.getTime());
  }

  const clearCalendar = () => {
    setCalendarValue(undefined);
    if (onChange) {
      onChange('');
    }
  };

  const selectCalendar = () => {
    if (Array.isArray(calendarValue)) {
      if (minDate && calendarValue[0].getTime() < minDate.getTime()) {
        return;
      }
      if (
        maxDate &&
        calendarValue[1] &&
        calendarValue[1].getTime() > maxDate.getTime()
      ) {
        return;
      }
      let _date = `${formatDate(new Date(calendarValue[0].toString()))}`;
      if (calendarValue[1]) {
        _date += ` - ${formatDate(new Date(calendarValue[1].toString()))}`;
      }
      if (onChange) {
        onChange(_date);
        closeCalendar();
      }
    } else if (calendarValue) {
      if (maxDate && calendarValue.getTime() > maxDate.getTime()) {
        return;
      }
      if (minDate && calendarValue.getTime() < minDate.getTime()) {
        return;
      }
      if (onChange) {
        onChange(formatDate(new Date(calendarValue.toString())));
        closeCalendar();
      }
    }
  };

  return (
    <div className='AMB-CalendarInput'>
      <Input
        {...other}
        value={value}
        placeholder={_placeholder}
        onChange={_onChange}
        onClick={() => !other.disabled && openCalendar()}
        ref={inputRef}
      />
      {calendar && (
        <div className='calendar' ref={calendarRef}>
          <Calendar
            maxDate={maxDate}
            minDate={minDate}
            onChange={onChoose}
            onClickDay={onClickDay}
            selectRange={!!daterange}
            activeStartDate={maxDate}
            value={calendarValue}
          />
          <div className='calendar-search'>
            <Button
              onClick={clearCalendar}
              transparent
              className='calendar-search-button'
            >
              Clear
            </Button>
            <Button onClick={selectCalendar} className='calendar-search-button'>
              Select
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarInput;

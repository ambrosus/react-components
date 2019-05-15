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

import { Input } from '../';

function CalendarInput(props: ICalendarInput) {
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState('');
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
    ...otherProps
  } = props;

  const onChoose = (_date: Date | Date[]) => {
    if (!!daterange) {
      setDate(
        `${formatDate(new Date(_date[0].toString()))} - ${formatDate(
          new Date(_date[1].toString()),
        )}`,
      );
    } else {
      setDate(formatDate(new Date(_date.toString())));
    }
    closeCalendar();
  };

  useEffect(() => {
    if (onChange && date) {
      onChange(date);
    }
  }, [date]);

  const _onChange = (event: any) => {
    setDate(event.target.value);
  };

  const handleClickOutsideCalendar = (event: any) => {
    if (
      calendarRef &&
      calendarRef.current &&
      !inputRef.current.contains(event.target) &&
      !calendarRef.current.contains(event.target) &&
      !event.target.classList.contains('react-calendar__tile')
    ) {
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

  return (
    <div className='AMB-CalendarInput'>
      <Input
        {...otherProps}
        value={date}
        placeholder={_placeholder}
        onChange={_onChange}
        onClick={() => !otherProps.disabled && openCalendar()}
        ref={inputRef}
      />
      {calendar && (
        <div className='calendar' ref={calendarRef}>
          <Calendar
            maxDate={maxDate}
            minDate={minDate}
            onChange={onChoose}
            selectRange={!!daterange}
          />
        </div>
      )}
    </div>
  );
}

export default CalendarInput;

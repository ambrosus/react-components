/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useRef, useEffect } from 'react';
import { formatDate } from '../../utils';
import Calendar from 'react-calendar';
import './CalendarInput.scss';
import { ICalendarInput } from '../../../interfaces';
import { Input, Button } from '../';

function CalendarInput(props: ICalendarInput) {
  const {
    maxDate,
    minDate,
    daterange,
    defaultValue,
    onFocus,
    onSelect,
    onBlur,
    ...other } = props;

  const [value, setValue] = useState(defaultValue || '');
  const [calendar, setCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState<Date | Date[] | undefined>(undefined);
  const calendarRef = useRef<HTMLDivElement>(null);
  const _placeholder = formatDate(new Date());

  const onChoose = (_date: Date | Date[]) => {
    let tempDate: string;
    if (Array.isArray(_date)) {
      tempDate = `${formatDate(new Date(_date[0].toString()))}`;
      _date[1].setHours(0, 0, 0, 0);
      if (_date[0].getTime() !== _date[1].getTime()) {
        tempDate += ` - ${formatDate(new Date(_date[1].toString()))}`;
      }
    } else {
      tempDate = formatDate(new Date(_date.toString()));
    }
    setValue(tempDate);
  };

  const onClickDay = (_date: Date) => {
    if (!!daterange) {
      setValue(formatDate(new Date(_date.toString())));
    }
  };

  const _onChange = (event: any) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  useEffect(() => {
    if (value) {
      checkValue(value);
    } else {
      setCalendarValue(undefined);
    }
  }, [value]);

  const handleClickOutsideCalendar = (event: any) => {
    if (
      calendarRef &&
      calendarRef.current &&
      !calendarRef.current.contains(event.target)
    ) {
      closeCalendar();
    }
  };


  const checkValue = (_date: string) => {
    let tempDate: Date | Date[];
    if (daterange) {
      const temp = _date.split('-');
      tempDate = [new Date(temp[0]), new Date(temp[1])];
      if (!isValidDate(tempDate[0]) || (minDate && tempDate[0] && tempDate[0].getTime() < minDate.getTime())) {
        return;
      } if (!isValidDate(tempDate[1]) || (maxDate && tempDate[1] && tempDate[1].getTime() > maxDate.getTime())) {
        tempDate = new Date(tempDate[0].toString());
      }
    } else {
      tempDate = new Date(_date);
      if (!isValidDate(tempDate)) {
        return;
      }
      if (minDate && tempDate && tempDate.getTime() < minDate.getTime()) {
        return;
      } if (maxDate && tempDate && tempDate.getTime() > maxDate.getTime()) {
        return;
      }
    }
    setCalendarValue(tempDate);
  };


  const openCalendar = () => {
    setCalendar(true);
    window.addEventListener('click', handleClickOutsideCalendar);
  };

  const closeCalendar = () => {
    setCalendar(false);
    window.removeEventListener('click', handleClickOutsideCalendar);
  };

  const isValidDate = (d: Date) => {
    return d instanceof Date && !isNaN(d.getTime());
  }

  const clearCalendar = () => {
    setCalendarValue(undefined);
    setValue('');
  };

  const selectDate = () => {
    let _date: string;
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
      _date = `${formatDate(new Date(calendarValue[0].toString()))}`;
      if (calendarValue[1]) {
        _date += ` - ${formatDate(new Date(calendarValue[1].toString()))}`;
      }
        setValue(_date);
        onSelect && onSelect(_date);
        closeCalendar();
    } else if (calendarValue) {
      if (maxDate && calendarValue.getTime() > maxDate.getTime()) {
        return;
      }
      if (minDate && calendarValue.getTime() < minDate.getTime()) {
        return;
      }
      _date = formatDate(new Date(calendarValue.toString()));
      setValue(_date);
      onSelect && onSelect(_date);
      closeCalendar();
    }
  };

  const minMaxDate = (_date: Date | undefined, type: 'min' | 'max') => {
    if (_date) {
      if (type === 'min') {
        _date.setHours(0, 0, 0, 0);
      } else {
        _date.setHours(23, 59, 59, 999);
      }
      return _date;
    }
    return undefined;
  }

  return (
    <div
      ref={calendarRef}
      className='AMB-CalendarInput'>
      <Input
        value={value}
        placeholder={_placeholder}
        onChange={_onChange}
        onClick={() => !other.disabled && openCalendar()}
      />
      {calendar && (
        <div className='calendar'>
          <Calendar
            maxDate={minMaxDate(maxDate, 'max')}
            minDate={minMaxDate(minDate, 'min')}
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
            <Button onClick={selectDate} className='calendar-search-button'>
              Select
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarInput;

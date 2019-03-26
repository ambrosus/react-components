/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useState, useRef } from 'react';
import { formatDate } from '../../utils';
import Calendar from 'react-calendar';

import './CalendarInput.scss';
import { ICalendarInput } from '../../../interfaces';

import { Input } from '../';

function CalendarInput(props: ICalendarInput) {
    const [calendar, setCalendar] = useState(false);
    const [date, setDate] = useState('');
    const calendarRef: any = useRef(null);

    const { daterange, value, onChange, onFocus, onBlur, ...otherProps } = props;

    const onChoose = (_date: Date | Date[]) => {
        if (!!daterange) {
            setDate(`${formatDate(new Date(_date[0].toString()))} - ${formatDate(new Date(_date[1].toString()))}`);
        } else {
            setDate(formatDate(new Date(_date.toString())));
        }
        closeCalendar();
    };

    const _onChange = (event: any) => {
        setDate(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    const handleClickOutsideCalendar = (event: any) => {
        if (
            calendarRef &&
            calendarRef.current &&
            !calendarRef.current.contains(event.target) &&
            !event.target.classList.contains('react-calendar__tile')
        ) {
            closeCalendar();
        }
    };

    const openCalendar = () => {
        setCalendar(true);
        document.addEventListener('click', handleClickOutsideCalendar);
    };

    const closeCalendar = () => {
        setCalendar(false);
        document.removeEventListener('click', handleClickOutsideCalendar);
    };

    const _placeholder = formatDate(new Date());

    const _value = date;

    return (
        <div className='AMB-CalendarInput'>
            <Input {...otherProps} value={_value} placeholder={_placeholder} onChange={_onChange}
                onClick={() => !otherProps.disabled && openCalendar()} />
            {calendar && (
                <div className='calendar' ref={calendarRef}>
                    <Calendar onChange={onChoose} selectRange={!!daterange} />
                </div>
            )}
        </div>
    );
}

export default CalendarInput;

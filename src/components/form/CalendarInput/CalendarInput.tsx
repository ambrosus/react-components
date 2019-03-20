/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { Component } from 'react';
import { formatDate } from '../../utils';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';

import './CalendarInput.scss';
import { ICalendarInput } from '../../../interfaces';

import { Input } from '../';

export default class CalendarInput extends Component<ICalendarInput, any> {
    public state: any = {
        otherProps: {},
        error: '',
        calendar: false,
        date: '',
    };
    private calendarRef: any;

    constructor(props: ICalendarInput) {
        super(props);
    }

    private closeOnScroll = (event: Event) => {
        this.closeCalendar();
    }

    private onChoose = (date: Date | Date[]) => {
        if (!!this.props.daterange) {
            this.setState({
                date: `${formatDate(new Date(date[0].toString()))} - ${formatDate(new Date(date[1].toString()))}`,
            });
        } else {
            this.setState({ date: formatDate(new Date(date.toString())) });
        }
        this.closeCalendar();
    }

    private onChange = (event: any) => {
        this.setState({ date: event.target.value });
        if (this.props.changed) {
            this.props.changed(event);
        }
    }

    private handleClickOutsideCalendar = (event: any) => {
        if (this.calendarRef && !this.calendarRef.contains(event.target) && !event.target.classList.contains('react-calendar__tile')) {
            this.closeCalendar();
        }
    }

    private openCalendar = () => {
        this.setState({ calendar: true });
        document.addEventListener('click', this.handleClickOutsideCalendar);
    }

    private closeCalendar = () => {
        this.setState({ calendar: false });
        document.removeEventListener('click', this.handleClickOutsideCalendar);
    }

    public render() {
        const { value, changed, ...otherProps } = this.props;

        const _placeholder = formatDate(new Date());

        const _value = this.state.date;

        return (
            <div className='AMB-CalendarInput'>
                <Input {...otherProps} value={_value} placeholder={_placeholder} changed={this.onChange}
                    onClick={() => !otherProps.disabled && this.openCalendar()} />
                {this.state.calendar && (
                    <div className='calendar' ref={r => this.calendarRef = r}>
                        <Calendar onChange={this.onChoose} selectRange={!!this.props.daterange} />
                    </div>
                )}
            </div>
        );
    }
}

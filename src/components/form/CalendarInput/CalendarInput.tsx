/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { Component } from 'react';
import { SVG, formatDate } from '../../utils';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';

import './CalendarInput.scss';
import { ICalendarInput } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';

export default class CalendarInput extends Component<ICalendarInput> {
    public state: any = {
        otherProps: {},
        error: '',
        calendar: false,
        date: '',
    };
    private label: any;
    private calendarRef: any;

    constructor(props: ICalendarInput) {
        super(props);
    }

    public componentDidMount() {
        this.label = ReactDOM.findDOMNode(this);
    }

    private stopScroll = (event: Event) => {
        event.preventDefault();
    }

    private onChoose = (date: Date | Date[]) => {
        if (this.props.daterange) {
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
        document.addEventListener('wheel', this.stopScroll);
        document.addEventListener('click', this.handleClickOutsideCalendar);
    }

    private closeCalendar = () => {
        this.setState({ calendar: false });
        document.removeEventListener('wheel', this.stopScroll);
        document.removeEventListener('click', this.handleClickOutsideCalendar);
    }

    public render() {
        const { label, className, value, changed, invalid, shouldValidate,
            touched, errors, disabled, light, info, placeholder, children, ...otherProps } = this.props;

        const classes: any = [
            'AMB-CalendarInput',
            `${light && 'light' || ''}`,
            `${disabled && 'disabled' || ''}`,
            `${touched && !invalid && 'valid' || ''}`,
            `${className || ''}`.trim(),
        ].filter(Boolean);

        if (invalid && shouldValidate && touched) {
            classes.push('error');
        }

        const _placeholder = formatDate(new Date());

        const _value = this.state.date;

        const calendarStyle: any = {};
        if (this.label) {
            const { top, bottom, left } = this.label.getBoundingClientRect();
            calendarStyle.left = left;
            calendarStyle.top = bottom;
            if (window.innerHeight - bottom - 250 < 0) {
                calendarStyle.top = top - 250 - 10;
            }
        }

        return (
            <>
                <label className={classes.join(' ').trim()} {...otherProps}>
                    {label && <span className='title'>{label}</span>}
                    <div className='input'>
                        <input
                            type='text'
                            value={_value}
                            onChange={this.onChange}
                            placeholder={_placeholder}
                            disabled={disabled}
                            onClick={this.openCalendar}
                        />
                        <div className='border'></div>
                        <div className='meta'>
                            {touched && !invalid && <SVG className='SVG' src={iconSuccess} />}
                            {info && (
                                <div className='info'>
                                    <SVG className='SVG' src={iconInfo} />
                                    <span className='message' dangerouslySetInnerHTML={{ __html: info }}></span>
                                </div>
                            )}
                        </div>
                    </div>
                    {((invalid && shouldValidate && touched) || this.state.error) && <p className='message'>{errors || this.state.error}</p>}
                </label>
                {this.state.calendar && (
                    <div className='calendar' style={calendarStyle} ref={r => this.calendarRef = r}>
                        <Calendar onChange={this.onChoose} selectRange={this.props.daterange} />
                    </div>
                )}
            </>
        );
    }
}

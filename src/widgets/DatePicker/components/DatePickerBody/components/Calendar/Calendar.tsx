import classNames from 'classnames';
import { useDatePickerContext } from '../../../../state/useDatePickerContext';
import { WeekList } from '../WeekList';
import './styles/Calendar.scss';

type CalendarProps = {
    className: string;
};

const Calendar = (props: CalendarProps) => {
    const { className } = props;
    const { dayList, currentDate } = useDatePickerContext();

    return (
        <div className={classNames(className, 'date-picker-calendar')}>
            <WeekList className="date-picker-calendar__week-list" />
            <div className="date-picker-calendar__day-list">
                {dayList.dayListPrevMonth &&
                    dayList.dayListPrevMonth.length > 0 &&
                    dayList.dayListPrevMonth.map((day) => {
                        return <button className="date-picker-calendar__prev-month-day-btn">{day}</button>;
                    })}
                {dayList.dayListCurrentMonth &&
                    dayList.dayListCurrentMonth.length > 0 &&
                    dayList.dayListCurrentMonth.map((day) => {
                        return (
                            <button
                                className={classNames('date-picker-calendar__current-month-day-btn', {
                                    'current-day': day === currentDate.day,
                                })}
                            >
                                {day}
                            </button>
                        );
                    })}
                {dayList.dayListNextMonth &&
                    dayList.dayListNextMonth.length > 0 &&
                    dayList.dayListNextMonth.map((day) => {
                        return <button className="date-picker-calendar__next-month-day-btn">{day}</button>;
                    })}
            </div>
        </div>
    );
};

export { Calendar };

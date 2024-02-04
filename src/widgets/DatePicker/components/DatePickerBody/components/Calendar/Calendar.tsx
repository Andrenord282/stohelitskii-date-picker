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
                    dayList.dayListPrevMonth.map((item) => {
                        const { id, value } = item;
                        return (
                            <button key={id} className="date-picker-calendar__prev-month-day-btn">
                                {value}
                            </button>
                        );
                    })}
                {dayList.dayListCurrentMonth &&
                    dayList.dayListCurrentMonth.length > 0 &&
                    dayList.dayListCurrentMonth.map((item) => {
                        const { id, value } = item;
                        return (
                            <button
                                key={id}
                                className={classNames('date-picker-calendar__current-month-day-btn', {
                                    'current-day': value === currentDate.day,
                                })}
                            >
                                {value}
                            </button>
                        );
                    })}
                {dayList.dayListNextMonth &&
                    dayList.dayListNextMonth.length > 0 &&
                    dayList.dayListNextMonth.map((item) => {
                        const { id, value } = item;
                        return (
                            <button key={id} className="date-picker-calendar__next-month-day-btn">
                                {value}
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};

export { Calendar };

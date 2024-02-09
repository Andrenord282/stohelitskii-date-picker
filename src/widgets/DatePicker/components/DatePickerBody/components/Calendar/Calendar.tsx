import classNames from 'classnames';
import { UpdateSelectedDateOption } from '../../../../types';
import { useDatePickerContext } from '../../../../state/useDatePickerContext';
import { useUpdateSelectedDate } from './hooks/useUpdateSelectedDate';
import { WeekList } from '../WeekList';
import './styles/Calendar.scss';

type CalendarProps = {
    className: string;
    onClickToggleDatePickerBody: (state: boolean) => void;
};

const Calendar = (props: CalendarProps) => {
    const { className, onClickToggleDatePickerBody } = props;
    const { location, dayList, currentDate, navigationDate, updateSelectedDate } = useDatePickerContext();
    const handleUpdateSelectedDate = useUpdateSelectedDate();

    return (
        <div className={classNames(className, 'date-picker-calendar')}>
            <WeekList className="date-picker-calendar__week-list" />
            <div className="date-picker-calendar__day-list">
                {dayList.dayListPrevMonth &&
                    dayList.dayListPrevMonth.length > 0 &&
                    dayList.dayListPrevMonth.map((item) => {
                        const { id, value } = item;
                        return (
                            <button
                                key={id}
                                onClick={(e: React.MouseEvent) => {
                                    const option: UpdateSelectedDateOption = {
                                        e,
                                        navigationDate,
                                        updateSelectedDate,
                                        onClickToggleDatePickerBody,
                                    };

                                    handleUpdateSelectedDate(option);
                                }}
                                data-month-type="prev-month"
                                className="date-picker-calendar__prev-month-day-btn"
                            >
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
                                onClick={(e: React.MouseEvent) => {
                                    const option: UpdateSelectedDateOption = {
                                        e,
                                        navigationDate,
                                        updateSelectedDate,
                                        onClickToggleDatePickerBody,
                                    };
                                    handleUpdateSelectedDate(option);
                                }}
                                data-month-type="current-month"
                                className={classNames('date-picker-calendar__current-month-day-btn', {
                                    'current-day':
                                        value === currentDate.day &&
                                        currentDate.month === navigationDate.month &&
                                        currentDate.year === navigationDate.year,
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
                            <button
                                key={id}
                                onClick={(e: React.MouseEvent) => {
                                    const option: UpdateSelectedDateOption = {
                                        e,
                                        navigationDate,
                                        updateSelectedDate,
                                        onClickToggleDatePickerBody,
                                    };

                                    handleUpdateSelectedDate(option);
                                }}
                                data-month-type="next-month"
                                className="date-picker-calendar__next-month-day-btn"
                            >
                                {value}
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};

export { Calendar };

import classNames from 'classnames';
import { WeekList } from '../WeekList';

type CalendarProps = {
    className: string;
};

const Calendar = (props: CalendarProps) => {
    const { className } = props;

    return (
        <div className={classNames(className, 'date-picker-calendar')}>
            <div className="date-picker-calendar__item">
                <WeekList className="date-picker-calendar__week-list" />
            </div>
        </div>
    );
};

export { Calendar };

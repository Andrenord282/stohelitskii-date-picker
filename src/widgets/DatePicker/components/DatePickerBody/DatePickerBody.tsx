import classNames from 'classnames';
import { NavigationBar } from './components/NavigationBar';
import { Calendar } from './components/Calendar';

type DatePickerBodyProps = {
    className: string;
};

const DatePickerBody = (props: DatePickerBodyProps) => {
    const { className } = props;

    return (
        <div className={classNames(className, 'date-picker-body')}>
            <NavigationBar className="date-picker-body__nav-bar" />
            <Calendar className="date-picker-body__calendar" />
        </div>
    );
};

export { DatePickerBody };

import { useRef } from 'react';
import { useDatePickerState } from './hooks/useDateInputState';
import { useSetStyleInDatePicker } from './hooks/useSetStyleInDatePicker';
import { DateInput } from './components/DateInput';
import { Calendar } from './components/Calendar';
import { styleOptions } from './types';

import './styles/DatePickerVar.scss';
import './styles/DatePicker.scss';

type DatePickerTheme = 'dark' | 'light';

type DatePickerProps = {
    label: string;
    placeholder: string;
    theme?: DatePickerTheme;
    styleOptions?: styleOptions;
};

const DatePicker = (props: DatePickerProps) => {
    const { label, placeholder, styleOptions, theme = 'dark' } = props;
    const datePickerRef = useRef(null);
    useSetStyleInDatePicker({ datePickerRef, styleOptions });

    const { calendarToggle, onClickToggleCalendar } = useDatePickerState();

    return (
        <div ref={datePickerRef} className={`date-picker date-picker_${theme}`}>
            <DateInput
                onClickToggleCalendar={onClickToggleCalendar}
                label={label}
                placeholder={placeholder}
                className="date-picker__input"
            />
            {calendarToggle && <Calendar className="date-picker__calendar" />}
        </div>
    );
};

export { DatePicker };

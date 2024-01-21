import { useRef } from 'react';
import { useDatePickerState } from './hooks/useDateInputState';
import { useSetStyleInDatePicker } from './hooks/useSetStyleInDatePicker';
import { DatePickerContextProvider } from './state/useDatePickerContext';
import { DateInput } from './components/DateInput';
import { DatePickerBody } from './components/DatePickerBody';
import { DateOptions, styleOptions } from './types';

import './styles/DatePickerVar.scss';
import './styles/DatePickerMixin.scss';
import './styles/DatePicker.scss';

type DatePickerTheme = 'dark' | 'light';

type DatePickerProps = {
    label: string;
    placeholder: string;
    theme?: DatePickerTheme;
    styleOptions?: styleOptions;
    optionData: DateOptions;
};

const DatePicker = (props: DatePickerProps) => {
    const { label, placeholder, optionData, styleOptions, theme = 'dark' } = props;
    const datePickerRef = useRef(null);
    useSetStyleInDatePicker({ datePickerRef, styleOptions });

    const { datePickerBodyToggle, onClickToggleDatePickerBody } = useDatePickerState();

    return (
        <DatePickerContextProvider option={optionData}>
            <div ref={datePickerRef} className={`date-picker date-picker_${theme}`}>
                <DateInput
                    onClickToggleDatePickerBody={onClickToggleDatePickerBody}
                    label={label}
                    placeholder={placeholder}
                    className="date-picker__input"
                />
                {true && <DatePickerBody className="date-picker__body" />}
            </div>
        </DatePickerContextProvider>
    );
};

export { DatePicker };

import { useRef } from 'react';
import { useDatePickerState } from './hooks/useDateInputState';
import { useEventOutside } from './hooks/useEventOutside';
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
    autoOpen: boolean;
    label: string;
    placeholder: string;
    theme?: DatePickerTheme;
    styleOptions?: styleOptions;
    optionData: DateOptions;
};

const DatePicker = (props: DatePickerProps) => {
    const { autoOpen, label, placeholder, optionData, styleOptions, theme = 'dark' } = props;
    
    const datePickerRef = useRef(null);
    const { datePickerToggle, onClickToggleDatePickerBody } = useDatePickerState();

    useSetStyleInDatePicker({ datePickerRef, styleOptions });

    useEventOutside(datePickerRef, () => {
        onClickToggleDatePickerBody(false);
    });

    return (
        <DatePickerContextProvider option={optionData}>
            <div ref={datePickerRef} className={`date-picker date-picker_${theme}`}>
                <DateInput
                    autoOpen={autoOpen}
                    datePickerToggle={datePickerToggle}
                    onClickToggleDatePickerBody={onClickToggleDatePickerBody}
                    label={label}
                    placeholder={placeholder}
                    className="date-picker__input"
                />
                {datePickerToggle && <DatePickerBody className="date-picker__body" />}
            </div>
        </DatePickerContextProvider>
    );
};

export { DatePicker };

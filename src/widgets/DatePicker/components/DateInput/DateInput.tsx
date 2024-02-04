import classNames from 'classnames';
import { useEffect } from 'react';
import { useInputChange } from '../../hooks/useInputChange';
import { useDatePickerContext } from '../../state/useDatePickerContext';
import { CalendarIcon } from '../Icons';

import './styles/DateInput.scss';

type DateInputPorps = {
    autoOpen: boolean;
    datePickerToggle: boolean;
    label: string;
    placeholder: string;
    className: string;
    onClickToggleDatePickerBody: (state: boolean) => void;
};

const DateInput = (props: DateInputPorps) => {
    const { className, autoOpen, datePickerToggle, placeholder, onClickToggleDatePickerBody } = props;
    const dateInput = useInputChange('');
    const { location, selectedDate } = useDatePickerContext();

    useEffect(() => {
        if (selectedDate.day) {
            const { year, month, day } = selectedDate;
            const date = new Date(year, month, day);
            const formatter = new Intl.DateTimeFormat(location, {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
            });
            dateInput.setValue(formatter.format(date));
        }
    }, [selectedDate]);

    const handleOnFocus = () => {
        if (!autoOpen) {
            return;
        }

        onClickToggleDatePickerBody(true);
    };

    const handleOnClickToggleBtn = (e: React.MouseEvent) => {
        if (!datePickerToggle) {
            onClickToggleDatePickerBody(true);
        } else {
            onClickToggleDatePickerBody(false);
        }
    };

    return (
        <div className={classNames(className, 'date-input')}>
            <input
                value={dateInput.value}
                placeholder={placeholder}
                type="text"
                className="date-input__input"
                onFocus={handleOnFocus}
            />
            <button
                onClick={(e: React.MouseEvent) => {
                    handleOnClickToggleBtn(e);
                }}
                className="date-input__toggle-btn"
            >
                <CalendarIcon className="date-input__toggle-btn-icon" />
            </button>
        </div>
    );
};

export { DateInput };

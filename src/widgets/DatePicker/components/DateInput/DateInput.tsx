import classNames from 'classnames';
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
            <input placeholder={placeholder} type="text" className="date-input__input" onFocus={handleOnFocus} />
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

import classNames from 'classnames';
import { CalendarIcon } from '../Icons';

import './styles/DateInput.scss';

type DateInputPorps = {
    label: string;
    placeholder: string;
    className: string;
    onClickToggleDatePickerBody: () => void;
};

const DateInput = (props: DateInputPorps) => {
    const { className, placeholder, onClickToggleDatePickerBody } = props;

    return (
        <div className={classNames(className, 'date-input')}>
            <input placeholder={placeholder} type="text" className="date-input__input" />
            <button onClick={onClickToggleDatePickerBody} className="date-input__toggle-btn">
                <CalendarIcon className="date-input__toggle-btn-icon" />
            </button>
        </div>
    );
};

export { DateInput };

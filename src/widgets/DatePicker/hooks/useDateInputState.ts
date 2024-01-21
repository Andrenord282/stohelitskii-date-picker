import { useState } from 'react';

type DatePickerState = {
    datePickerBodyToggle: boolean;
    onClickToggleDatePickerBody: () => void;
};

const useDatePickerState = (): DatePickerState => {
    const [datePickerBodyToggle, setDatePickerBodyToggle] = useState(false);

    const onClickToggleDatePickerBody = () => {
        setDatePickerBodyToggle((prevToggle) => !prevToggle);
    };

    return {
        datePickerBodyToggle,
        onClickToggleDatePickerBody,
    };
};

export { useDatePickerState };

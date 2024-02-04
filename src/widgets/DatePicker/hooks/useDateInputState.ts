import { useState } from 'react';

type DatePickerState = {
    datePickerToggle: boolean;
    onClickToggleDatePickerBody: (state: boolean) => void;
};

const useDatePickerState = (): DatePickerState => {
    const [datePickerToggle, setDatePickerToggle] = useState(false);

    const onClickToggleDatePickerBody = (state: boolean) => {
        setDatePickerToggle((prevToggle) => state);
    };

    return {
        datePickerToggle,
        onClickToggleDatePickerBody,
    };
};

export { useDatePickerState };

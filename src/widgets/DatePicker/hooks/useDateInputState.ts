import { useState } from 'react';

type DatePickerState = {
    datePickerToggle: boolean;
    onClickToggleDatePickerBody: (force?: boolean) => void;
};

const useDatePickerState = (): DatePickerState => {
    const [datePickerToggle, setDatePickerToggle] = useState(false);

    const onClickToggleDatePickerBody = (force?: boolean) => {
        setDatePickerToggle((prevToggle) => (force ? force : !prevToggle));
    };

    return {
        datePickerToggle,
        onClickToggleDatePickerBody,
    };
};

export { useDatePickerState };

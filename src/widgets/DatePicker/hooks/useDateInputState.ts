import { useState } from "react";

type DatePickerState = {
    calendarToggle: boolean;
    onClickToggleCalendar: () => void;
};

const useDatePickerState = (): DatePickerState => {
    const [calendarToggle, setCalendarToggle] = useState(false);

    const onClickToggleCalendar = () => {
        setCalendarToggle((prevToggle) => !prevToggle);
    };

    return {
        calendarToggle,
        onClickToggleCalendar,
    };
};

export { useDatePickerState };

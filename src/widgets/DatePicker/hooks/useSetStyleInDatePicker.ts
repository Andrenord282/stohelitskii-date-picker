import { useEffect, RefObject } from 'react';

type setStyleInDatePickerProps = {
    datePickerRef: RefObject<HTMLDivElement>;
};

const useSetStyleInDatePicker = (props: setStyleInDatePickerProps) => {
    const { datePickerRef } = props;

    useEffect(() => {
        if (datePickerRef.current) {
        }
    }, []);
};

export { useSetStyleInDatePicker };

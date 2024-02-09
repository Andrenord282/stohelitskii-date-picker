import { useEffect, RefObject } from 'react';
import { StyleOptions } from '../types/index';

type setStyleInDatePickerProps = {
    datePickerRef: RefObject<HTMLDivElement>;
    StyleOptions?: StyleOptions;
};

const useSetStyleInDatePicker = (props: setStyleInDatePickerProps) => {
    const { datePickerRef, StyleOptions } = props;

    useEffect(() => {
        if (datePickerRef.current && StyleOptions !== undefined && Object.keys(StyleOptions).length) {
            const rootName = '--date-picker';
            for (const [option, value] of Object.entries(StyleOptions)) {
                datePickerRef.current.style.setProperty(`${rootName}-${option}`, value);
            }

            document.documentElement.style.setProperty('--main-color', '#ff5733');
        }
    }, []);
};

export { useSetStyleInDatePicker };

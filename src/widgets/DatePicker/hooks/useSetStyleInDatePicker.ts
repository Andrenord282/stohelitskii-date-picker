import { useEffect, RefObject } from 'react';
import { styleOptions } from '../types/index';

type setStyleInDatePickerProps = {
    datePickerRef: RefObject<HTMLDivElement>;
    styleOptions?: styleOptions;
};

const useSetStyleInDatePicker = (props: setStyleInDatePickerProps) => {
    const { datePickerRef, styleOptions } = props;

    useEffect(() => {
        if (datePickerRef.current && styleOptions !== undefined && Object.keys(styleOptions).length) {
            const rootName = '--date-picker';
            for (const [option, value] of Object.entries(styleOptions)) {
                datePickerRef.current.style.setProperty(`${rootName}-${option}`, value);
            }

            document.documentElement.style.setProperty('--main-color', '#ff5733');
        }
    }, []);
};

export { useSetStyleInDatePicker };

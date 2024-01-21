import { ReactNode, createContext, useContext, useState } from 'react';
import { DateOptions, DateData, DayList } from '../types';
import { initDate, initWeekList, initDayList } from './utilities';

type DatePickerContextValue = {
    weekList: string[];
    currentDate: DateData;
    navigationDate: DateData;
    updateNavigationDate: (key: updateDateKeyName, operation: updateDateOperation) => void;
};

type DatePickerContextProviderProps = {
    children: ReactNode;
    option: DateOptions;
};

type updateDateOperation = 'inc' | 'dec';
type updateDateKeyName = 'year' | 'month' | 'day';

const DatePickerContext = createContext<DatePickerContextValue | null>(null);

const DatePickerContextProvider = (props: DatePickerContextProviderProps) => {
    const { children, option } = props;
    const [currentDate, setCurrentDate] = useState<DateData>(initDate(option));
    const [navigationDate, setNavigationDate] = useState<DateData>(initDate(option));
    const [weekList, setWeekList] = useState<string[]>(initWeekList(option));
    const [dayList, setDayList] = useState<DayList>(initDayList(currentDate));

    const udateDayList = (newDate: DateData) => {
        const newDayList = initDayList(newDate);
        setDayList(newDayList);
    };

    const updateNavigationDate = (key: updateDateKeyName, operation: updateDateOperation): void => {
        setNavigationDate((prevDate) => {
            const year = prevDate.year;
            const month = prevDate.month;
            const day = prevDate.day;
            const formatter = prevDate.formatter;
            let newDate = {};

            switch (true) {
                case key === 'year' && operation === 'inc':
                    newDate = { ...prevDate, year: year + 1, text: formatter.format(new Date(year + 1, month, day)) };
                    break;
                case key === 'year' && operation === 'dec':
                    newDate = { ...prevDate, year: year - 1, text: formatter.format(new Date(year - 1, month, day)) };
                    break;
                case key === 'month' && operation === 'inc':
                    newDate = { ...prevDate, month: month + 1, text: formatter.format(new Date(year, month + 1, day)) };
                    break;
                case key === 'month' && operation === 'dec':
                    newDate = { ...prevDate, month: month - 1, text: formatter.format(new Date(year, month - 1, day)) };
                    break;
                default:
                    return prevDate;
            }

            udateDayList(newDate as DateData);
            return newDate as DateData;
        });
    };

    const dataPickerContextValue: DatePickerContextValue = {
        weekList,
        currentDate,
        navigationDate,
        updateNavigationDate,
    };

    return <DatePickerContext.Provider value={dataPickerContextValue}>{children}</DatePickerContext.Provider>;
};

const useDatePickerContext = (): DatePickerContextValue => {
    const contextData = useContext<DatePickerContextValue | null>(DatePickerContext);

    return contextData;
};

export { DatePickerContextProvider, useDatePickerContext };

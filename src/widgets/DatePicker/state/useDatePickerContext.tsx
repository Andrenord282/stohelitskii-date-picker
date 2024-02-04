import { ReactNode, createContext, useContext, useState } from 'react';
import {
    Location,
    FormatterData,
    DateOptions,
    DateData,
    UpdateDateOperation,
    UpdateDateKeyName,
    DayList,
    NavigationDateData,
} from '../types';
import { initFormatter, initDate, initNavigationDate, initWeekList, initDayList } from './utilities';

type DatePickerContextValue = {
    location: Location;
    weekList: string[];
    currentDate: DateData;
    navigationDate: NavigationDateData;
    selectedDate: DateData;
    dayList: DayList;
    formatter: Intl.DateTimeFormat;
    updateNavigationDate: (key: UpdateDateKeyName, operation: UpdateDateOperation) => void;
    updateSelectedDate: (selectedDate: DateData) => void;
};

type DatePickerContextProviderProps = {
    children: ReactNode;
    option: DateOptions;
};

const DatePickerContext = createContext<DatePickerContextValue | null>(null);

const DatePickerContextProvider = (props: DatePickerContextProviderProps) => {
    const { children, option } = props;
    const [location, setLocation] = useState<Location>(option.location);
    const [formatter, setFormatter] = useState<FormatterData>(initFormatter(option));
    const [currentDate, setCurrentDate] = useState<DateData>(initDate(option, 'currentDate'));
    const [navigationDate, setNavigationDate] = useState<NavigationDateData>(initNavigationDate(option));
    const [selectedDate, setSelectedDate] = useState<DateData>(initDate(option, 'selectedDate'));
    const [weekList, setWeekList] = useState<string[]>(initWeekList(option));
    const [dayList, setDayList] = useState<DayList>(initDayList(currentDate));

    const udateDayList = (newDate: DateData) => {
        const newDayList = initDayList(newDate);
        setDayList(newDayList);
    };

    const updateNavigationDate = (key: UpdateDateKeyName, operation: UpdateDateOperation): void => {
        setNavigationDate((prevDate) => {
            const year = prevDate.year;
            const month = prevDate.month;
            const formatter = prevDate.formatter;
            let newDate = {};

            switch (true) {
                case (key === 'month' && operation === 'skip') || (key === 'year' && operation === 'skip'):
                    newDate = {
                        ...prevDate,
                    };
                case key === 'year' && operation === 'inc':
                    newDate = { ...prevDate, year: year + 1, text: formatter.format(new Date(year + 1, month)) };
                    break;
                case key === 'year' && operation === 'dec':
                    newDate = { ...prevDate, year: year - 1, text: formatter.format(new Date(year - 1, month)) };
                    break;

                    break;
                case key === 'month' && operation === 'inc' && month === 11:
                    newDate = {
                        ...prevDate,
                        month: 0,
                        year: year + 1,
                        text: formatter.format(new Date(year + 1, 0)),
                    };
                    break;
                case key === 'month' && operation === 'inc':
                    newDate = { ...prevDate, month: month + 1, text: formatter.format(new Date(year, month + 1)) };
                    break;
                case key === 'month' && operation === 'dec' && month === 0:
                    newDate = {
                        ...prevDate,
                        month: 11,
                        year: year - 1,
                        text: formatter.format(new Date(year - 1, 11)),
                    };
                    break;
                case key === 'month' && operation === 'dec':
                    newDate = { ...prevDate, month: month - 1, text: formatter.format(new Date(year, month - 1)) };
                    break;
                default:
                    return prevDate;
            }

            udateDayList(newDate as DateData);
            return newDate as DateData;
        });
    };

    const updateSelectedDate = (selectedDate: DateData) => {
        setSelectedDate((prevDate) => {
            const newDate = {
                ...prevDate,
                ...selectedDate,
            };
            udateDayList(newDate);
            setNavigationDate(newDate);

            return newDate;
        });
    };

    const dataPickerContextValue: DatePickerContextValue = {
        location,
        formatter,
        weekList,
        currentDate,
        navigationDate,
        selectedDate,
        dayList,
        updateNavigationDate,
        updateSelectedDate,
    };

    return <DatePickerContext.Provider value={dataPickerContextValue}>{children}</DatePickerContext.Provider>;
};

const useDatePickerContext = (): DatePickerContextValue => {
    const contextData = useContext<DatePickerContextValue | null>(DatePickerContext);

    return contextData;
};

export { DatePickerContextProvider, useDatePickerContext };

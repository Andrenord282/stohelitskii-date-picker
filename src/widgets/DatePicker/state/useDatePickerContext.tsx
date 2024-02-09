import { ReactNode, createContext, useContext, useState } from 'react';
import {
    Location,
    DateData,
    UpdateDateOperation,
    UpdateDateKeyName,
    DayList,
    NavigationDateData,
    FirstWeekDay,
    FormatOption,
} from '../types';
import { initDateData, initWeekList, getDayList, getDateData } from './utilities';

type DatePickerContextValue = {
    location: Location;
    weekList: string[];
    currentDate: DateData;
    navigationDate: NavigationDateData;
    selectedDate: DateData;
    dayList: DayList;
    updateNavigationDate: (key: UpdateDateKeyName, operation: UpdateDateOperation) => void;
    updateSelectedDate: (selectedDate: Date) => void;
};

type DatePickerContextProviderProps = {
    children: ReactNode;
    option: {
        location: Location;
        firstWeekDay: FirstWeekDay;
    };
};

const DatePickerContext = createContext<DatePickerContextValue | null>(null);

const DatePickerContextProvider = (props: DatePickerContextProviderProps) => {
    const { children, option } = props;
    const [location, setLocation] = useState<Location>(option.location);
    const [currentDate, setCurrentDate] = useState<DateData>(initDateData(option, 'currentDate'));
    const [navigationDate, setNavigationDate] = useState<DateData>(initDateData(option, 'navigateName'));
    const [selectedDate, setSelectedDate] = useState<DateData>(initDateData(option, 'selectedDate'));
    const [weekList, setWeekList] = useState<string[]>(initWeekList(option));
    const [dayList, setDayList] = useState<DayList>(getDayList(currentDate));

    const udateDayList = (newDateData: NavigationDateData) => {
        const newDayList = getDayList(newDateData);
        setDayList(newDayList);
    };

    const updateNavigationDate = (key: UpdateDateKeyName, operation: UpdateDateOperation): void => {
        setNavigationDate((prevDateData) => {
            const { year, month } = prevDateData;
            let newDateData = {};
            const updateFormatOption: FormatOption = {
                month: 'long',
                day: null,
            };

            if (key === 'month' && operation === 'skip') {
                newDateData = {
                    ...prevDateData,
                };
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }

            if (key === 'year' && operation === 'skip') {
                newDateData = {
                    ...prevDateData,
                };
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }

            if (key === 'year' && operation === 'inc') {
                const newDate = new Date(year + 1, month);
                newDateData = getDateData(newDate, location, updateFormatOption);
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }

            if (key === 'year' && operation === 'dec') {
                const newDate = new Date(year - 1, month);
                newDateData = getDateData(newDate, location, updateFormatOption);
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }

            if (key === 'month' && operation === 'inc' && month === 11) {
                const newDate = new Date(year + 1, 0);
                newDateData = getDateData(newDate, location, updateFormatOption);
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }

            if (key === 'month' && operation === 'inc') {
                const newDate = new Date(year, month + 1);
                newDateData = getDateData(newDate, location, updateFormatOption);
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }

            if (key === 'month' && operation === 'dec' && month === 0) {
                const newDate = new Date(year - 1, 11);
                newDateData = getDateData(newDate, location, updateFormatOption);
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }

            if (key === 'month' && operation === 'dec') {
                const newDate = new Date(year, month - 1);
                newDateData = getDateData(newDate, location, updateFormatOption);
                udateDayList(newDateData as DateData);
                return newDateData as DateData;
            }
        });
    };

    const updateSelectedDate = (selectedDate: Date) => {
        setSelectedDate((prevDateData) => {
            const newSelectedDate = getDateData(selectedDate, location);
            const newNavigateDate = getDateData(selectedDate, location, {
                month: 'long',
                day: null,
            });

            udateDayList(newSelectedDate);
            setNavigationDate(newNavigateDate);
            return newSelectedDate;
        });
    };

    const dataPickerContextValue: DatePickerContextValue = {
        location,
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

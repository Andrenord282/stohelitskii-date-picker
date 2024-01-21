import { DateData, DayList } from '../../types';

const initDayList = (dateData: DateData): DayList => {
    const { year, month } = dateData;
    const AMOUNT_DAY_IN_WEEK = 7;
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    const firstDayOfCurrentMonth = new Date(year, month, 1).getDate();
    const lastDayOfCurrentMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekDayOfCurrentMonth =
        new Date(year, month, 1).getDay() === 0 ? 6 : new Date(year, month, 1).getDay() - 1;
    const lastWeekDayOfCurrentMonth =
        new Date(year, month + 1, 0).getDay() === 0 ? 6 : new Date(year, month + 1, 0).getDay();
    const amountDayOfPrevMonth = firstWeekDayOfCurrentMonth - 1;
    const dayListOfNextMonthLength = AMOUNT_DAY_IN_WEEK - lastWeekDayOfCurrentMonth;
    const dayListPrevMonth = [];
    const dayListCurrentMonth = [];
    const dayListNextMonth = [];

    for (let index = 0, day = lastDayOfPrevMonth; index <= amountDayOfPrevMonth; day--, index++) {
        dayListPrevMonth.push(day);
    }

    for (let index = firstDayOfCurrentMonth; index <= lastDayOfCurrentMonth; index++) {
        dayListCurrentMonth.push(index);
    }

    for (let index = 1; index <= dayListOfNextMonthLength; index++) {
        dayListNextMonth.push(index);
    }

    return {
        dayListPrevMonth: dayListPrevMonth.reverse(),
        dayListCurrentMonth,
        dayListNextMonth: dayListNextMonth.reverse(),
    };
};

export { initDayList };

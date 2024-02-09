import { nanoid } from 'nanoid';
import { NavigationDateData, DayList } from '../../types';

const getDayList = (dateData: NavigationDateData): DayList => {
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
    const dayListOfNextMonthLength =
        lastWeekDayOfCurrentMonth === 6 ? 0 : AMOUNT_DAY_IN_WEEK - lastWeekDayOfCurrentMonth;
    const dayListPrevMonth = [];
    const dayListCurrentMonth = [];
    const dayListNextMonth = [];

    for (let currentDay = lastDayOfPrevMonth; lastDayOfPrevMonth - amountDayOfPrevMonth <= currentDay; currentDay--) {
        dayListPrevMonth.push({ id: nanoid(5), value: currentDay });
    }

    for (let currentDay = firstDayOfCurrentMonth; currentDay <= lastDayOfCurrentMonth; currentDay++) {
        dayListCurrentMonth.push({ id: nanoid(5), value: currentDay });
    }

    for (let currentDay = 1; currentDay <= dayListOfNextMonthLength; currentDay++) {
        dayListNextMonth.push({ id: nanoid(5), value: currentDay });
    }

    return {
        dayListPrevMonth: dayListPrevMonth.reverse(),
        dayListCurrentMonth,
        dayListNextMonth,
    };
};

export { getDayList };

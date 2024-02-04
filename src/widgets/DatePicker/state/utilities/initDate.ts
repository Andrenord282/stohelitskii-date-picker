import { DateOptions, DateData } from '../../types';

type DateName = 'currentDate' | 'selectedDate';

const initDate = (options: DateOptions, dateName: DateName): DateData => {
    const { location, weekday, ...formatterOptions } = options;
    const date = new Date();
    const formatter = new Intl.DateTimeFormat(location, formatterOptions);

    if (dateName === 'currentDate') {
        return {
            timestamp: date.getTime(),
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            text: formatter.format(date),
            formatter: formatter,
        };
    }

    if (dateName === 'selectedDate') {
        return {
            timestamp: null,
            year: null,
            month: null,
            day: null,
            text: null,
            formatter: formatter,
        };
    }
};

export { initDate };

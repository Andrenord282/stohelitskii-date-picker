import { DateOptions, DateData } from '../../types';

const initDate = (options: DateOptions): DateData => {
    const { location, weekday, ...formatterOptions } = options;
    const date = new Date();
    const formatter = new Intl.DateTimeFormat(location, formatterOptions);

    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        text: formatter.format(date),
        formatter: formatter,
    };
};

export { initDate };

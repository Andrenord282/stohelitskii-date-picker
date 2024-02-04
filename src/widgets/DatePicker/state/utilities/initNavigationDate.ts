import { DateOptions, NavigationDateData } from '../../types';

const initNavigationDate = (options: DateOptions): NavigationDateData => {
    const { location, day, weekday, ...formatterOptions } = options;
    const date = new Date();
    const formatter = new Intl.DateTimeFormat(location, formatterOptions);

    return {
        timestamp: date.getTime(),
        year: date.getFullYear(),
        month: date.getMonth(),
        text: formatter.format(date),
        formatter: formatter,
    };
};

export { initNavigationDate };

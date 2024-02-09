import { DateOptions, DateData } from '../../types';

type DateName = 'navigateName' | 'currentDate' | 'selectedDate';

const initDateData = (options: DateOptions, dateName: DateName): DateData => {
    const { location } = options;
    const date = new Date();

    if (dateName === 'navigateName') {
        const formatter = new Intl.DateTimeFormat(location, {
            year: 'numeric',
            month: 'long',
        });

        return {
            timestamp: date.getTime(),
            year: date.getFullYear(),
            month: date.getMonth(),
            day: null,
            text: formatter.format(date),
            formatter: formatter,
        };
    }

    if (dateName === 'currentDate') {
        const formatter = new Intl.DateTimeFormat(location, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
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
        const formatter = new Intl.DateTimeFormat(location, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

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

export { initDateData };

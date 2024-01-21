import { DateOptions } from "../../types";

const initWeekList = (options: DateOptions): string[] => {
    const { location, firstWeekDay, ...formatterOptions } = options;
    const formatter = new Intl.DateTimeFormat(location, formatterOptions);
    const weekList = [];

    switch (true) {
        case firstWeekDay === 'monday':
            for (let index = 0; index < 7; index++) {
                const date = new Date(1972, 0, index + 3);
                const weekdayName = formatter.formatToParts(date).find((part) => part.type === 'weekday').value;
                weekList.push(weekdayName);
            }
            break;
        case firstWeekDay === 'sunday':
            for (let index = 0; index < 7; index++) {
                const date = new Date(1972, 0, index + 2);
                const weekdayName = formatter.formatToParts(date).find((part) => part.type === 'weekday').value;
                weekList.push(weekdayName);
            }
            break;

        default:
            break;
    }

    return weekList;
};

export { initWeekList };

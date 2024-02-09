import { Location, FormatOption, DateData } from '../../types';

const getDateData = (
    date: Date,
    location: Location,
    updateFormatOption?: FormatOption
): DateData => {
    let initFormatOption: FormatOption = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    if (updateFormatOption) {
        for (const [key, value] of Object.entries(updateFormatOption)) {
            const typedKey: keyof FormatOption = key as keyof FormatOption;
            if (value === null) {
                delete updateFormatOption[typedKey];
                delete initFormatOption[typedKey];
            }
        }
    }

    initFormatOption = { ...initFormatOption, ...updateFormatOption };
    const formatter = new Intl.DateTimeFormat(location, initFormatOption);

    return {
        timestamp: date.getTime(),
        year: initFormatOption.year ? date.getFullYear() : null,
        month: initFormatOption.month ? date.getMonth() : null,
        day: initFormatOption.day ? date.getDate() : null,
        text: formatter.format(date),
        formatter: formatter,
    };
};

export { getDateData };

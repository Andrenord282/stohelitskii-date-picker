import { DateOptions } from '../../types';

const initFormatter = (options: DateOptions) => {
    const { location, weekday, day, ...formatterOptions } = options;
    return new Intl.DateTimeFormat(location, formatterOptions);
};

export { initFormatter };

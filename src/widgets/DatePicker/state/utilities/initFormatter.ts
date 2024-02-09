import { DateOptions } from '../../types';

const initFormatter = (options: DateOptions) => {
    const { location } = options;
    return new Intl.DateTimeFormat(location);
};

export { initFormatter };

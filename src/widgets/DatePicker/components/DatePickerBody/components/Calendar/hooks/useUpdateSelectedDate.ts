import { DateData, UpdateSelectedDateOption } from '@/widgets/DatePicker/types';

type monthType = 'prev-month' | 'current-month' | 'next-month';

const useUpdateSelectedDate = () => {
    return (option: UpdateSelectedDateOption) => {
        const { e, formatter, navigationDate, updateSelectedDate, onClickToggleDatePickerBody } = option;
        const { month, year } = navigationDate;
        e.stopPropagation();
        const self = e.currentTarget as HTMLElement;
        const day = +self.textContent;
        const monthType = self.dataset.monthType as monthType;

        if (monthType === 'prev-month') {
            const date = new Date(year, month - 1, day);
            const dateData: DateData = {
                timestamp: date.getTime(),
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                text: formatter.format(date),
                formatter: formatter,
            };

            updateSelectedDate(dateData);
            onClickToggleDatePickerBody(false);
            return;
        }

        if (monthType === 'current-month') {
            const date = new Date(year, month, day);
            const dateData: DateData = {
                timestamp: date.getTime(),
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                text: formatter.format(date),
                formatter: formatter,
            };

            updateSelectedDate(dateData);
            onClickToggleDatePickerBody(false);
            return;
        }

        if (monthType === 'next-month') {
            const date = new Date(year, month + 1, day);
            const dateData: DateData = {
                timestamp: date.getTime(),
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                text: formatter.format(date),
                formatter: formatter,
            };

            updateSelectedDate(dateData);
            onClickToggleDatePickerBody(false);
            return;
        }
    };
};

export { useUpdateSelectedDate };

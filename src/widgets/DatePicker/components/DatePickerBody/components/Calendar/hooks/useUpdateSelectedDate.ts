import { UpdateSelectedDateOption } from '@/widgets/DatePicker/types';

type monthType = 'prev-month' | 'current-month' | 'next-month';

const useUpdateSelectedDate = () => {
    return (option: UpdateSelectedDateOption) => {
        const { e, navigationDate, updateSelectedDate, onClickToggleDatePickerBody } = option;
        const { month, year } = navigationDate;
        e.stopPropagation();
        const self = e.currentTarget as HTMLElement;
        const day = +self.textContent;
        const monthType = self.dataset.monthType as monthType;

        if (monthType === 'prev-month') {
            const date = new Date(year, month - 1, day);
            updateSelectedDate(date);
            onClickToggleDatePickerBody(false);
            return;
        }

        if (monthType === 'current-month') {
            const date = new Date(year, month, day);
            updateSelectedDate(date);
            onClickToggleDatePickerBody(false);
            return;
        }

        if (monthType === 'next-month') {
            const date = new Date(year, month + 1, day);
            updateSelectedDate(date);
            onClickToggleDatePickerBody(false);
            return;
        }
    };
};

export { useUpdateSelectedDate };

export type StyleOptions = {
    ['text-xl-size']?: string;
    ['text-l-size']?: string;
    ['text-m-size']?: string;
    ['text-s-size']?: string;
    ['text-xs-size']?: string;
    ['primary-bg-color']?: string;
    ['secondary-bg-color']?: string;
    ['primary-color']?: string;
    ['secondary-color']?: string;
    ['tertiary-color']?: string;
};

export type Location = 'ru-RU' | 'es-ES' | 'en-EN';
export type FirstWeekDay = 'sunday' | 'monday';
export type DateOptions = {
    location: Location;
    firstWeekDay: FirstWeekDay;
};
export type FormatOption = {
    day?: 'numeric' | '2-digit' | null;
    month?: 'numeric' | '2-digit' | 'long' | 'short' | null;
    year?: 'numeric' | '2-digit' | null;
    weekday?: 'long' | 'short' | 'narrow' | null;
};

export type DateData = {
    timestamp: number | null;
    year: number | null;
    month: number | null;
    day: number | null;
    text: string | null;
    formatter: Intl.DateTimeFormat | null;
};

export type NavigationDateData = {
    timestamp: number | null;
    year: number | null;
    month: number | null;
    text: string | null;
    formatter: Intl.DateTimeFormat;
};

export type UpdateDateOperation = 'inc' | 'dec' | 'skip';
export type UpdateDateKeyName = 'year' | 'month' | 'day';

export type DayList = {
    dayListPrevMonth: { id: string; value: number }[];
    dayListCurrentMonth: { id: string; value: number }[];
    dayListNextMonth: { id: string; value: number }[];
};

export type UpdateSelectedDateOption = {
    e: React.MouseEvent;
    navigationDate: NavigationDateData;
    updateSelectedDate: (selectedDate: Date) => void;
    onClickToggleDatePickerBody: (state: boolean) => void;
};

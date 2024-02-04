export type styleOptions = {
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

export type DateOptions = {
    location: Location;
    day: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit' | 'long' | 'short';
    year: 'numeric' | '2-digit';
    weekday: 'long' | 'short' | 'narrow';
    firstWeekDay: 'sunday' | 'monday';
};

export type DateData = {
    year: number;
    month: number;
    day: number;
    text: string;
    formatter: Intl.DateTimeFormat;
};

export type DayList = {
    dayListPrevMonth: { id: string; value: number }[];
    dayListCurrentMonth: { id: string; value: number }[];
    dayListNextMonth: { id: string; value: number }[];
};

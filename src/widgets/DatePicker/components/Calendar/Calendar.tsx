type CalendarProps = {
    className: string;
};

const Calendar = (props: CalendarProps) => {
    const { className } = props;

    return (
        <div className={className}>
            <p>Calendar</p>
            <p>Calendar</p>
        </div>
    );
};

export { Calendar };

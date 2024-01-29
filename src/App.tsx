import { DatePicker } from './widgets/DatePicker';
import './App.scss';
import { DateOptions } from './widgets/DatePicker/types';

const App = () => {
    const option: DateOptions = {
        location: 'ru-RU',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'short',
        firstWeekDay: 'monday',
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '100%',
                minHeight: '100vh',
                padding: '20px',
                backgroundColor: 'rgb(112, 191, 117)',
            }}
        >
            <DatePicker label="Введите дату" placeholder="dd/mm/yyyy" autoOpen={true} optionData={option} />
        </div>
    );
};

export { App };

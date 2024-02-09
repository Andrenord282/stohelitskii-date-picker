import { DatePicker } from './widgets/DatePicker';
import './App.scss';

const App = () => {
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
            <DatePicker
                label="Введите дату"
                placeholder="dd/mm/yyyy"
                autoOpen={true}
                location="ru-RU"
                firstWeekDay="monday"
            />
        </div>
    );
};

export { App };

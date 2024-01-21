import classNames from 'classnames';
import { useDatePickerContext } from '../../../../state/useDatePickerContext';
import './styles/WeekList.scss';

type WeekListProps = {
    className: string;
};

const WeekList = (props: WeekListProps) => {
    const { className } = props;
    const { weekList } = useDatePickerContext();

    return (
        <div className={classNames(className, 'date-picker-weeklist')}>
            {weekList &&
                weekList.length > 0 &&
                weekList.map((item) => {
                    return (
                        <div key={item} className="date-picker-weeklist__item">
                            {item}
                        </div>
                    );
                })}
        </div>
    );
};

export { WeekList };

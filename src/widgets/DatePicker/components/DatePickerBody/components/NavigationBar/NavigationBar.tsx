import classNames from 'classnames';
import { useDatePickerContext } from '../../../../state/useDatePickerContext';
import { ArrowLeft, DoubleArrowLeft, ArrowRight, DoubleArrowRight } from '../../../Icons';
import './styles/NavigationBar.scss';

type NavigationBarProps = {
    className: string;
};

const NavigationBar = (props: NavigationBarProps) => {
    const { className } = props;
    const { navigationDate, updateNavigationDate } = useDatePickerContext();

    return (
        <div className={classNames(className, 'navigation-bar')}>
            <div className="navigation-bar__nav-item">
                <button className="navigation-bar__nav-btn" onClick={() => updateNavigationDate('year', 'dec')}>
                    <DoubleArrowLeft className="navigation-bar__nav-btn-icon" />
                </button>
                <button className="navigation-bar__nav-btn" onClick={() => updateNavigationDate('month', 'dec')}>
                    <ArrowLeft className="navigation-bar__nav-btn-icon" />
                </button>
            </div>
            <div className="navigation-bar__date">
                <span className="navigation-bar__date-value">{navigationDate.text}</span>
            </div>
            <div className="navigation-bar__nav-item">
                <button className="navigation-bar__nav-btn" onClick={() => updateNavigationDate('month', 'inc')}>
                    <ArrowRight className="navigation-bar__nav-btn-icon" />
                </button>
                <button className="navigation-bar__nav-btn" onClick={() => updateNavigationDate('year', 'inc')}>
                    <DoubleArrowRight className="navigation-bar__nav-btn-icon" />
                </button>
            </div>
        </div>
    );
};

export { NavigationBar };

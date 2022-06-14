import styles from './SearchCity.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SearchCity({ input, setInput, fetchWeather }) {
    return (
        <div className={cx('content')}>
            <input
                value={input}
                className={cx('search')}
                placeholder="Enter name city..."
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={fetchWeather} className={cx('searchBtn')}>
                Search
            </button>
        </div>
    );
}

export default SearchCity;

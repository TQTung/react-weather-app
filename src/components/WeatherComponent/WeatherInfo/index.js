import styles from './WeatherInfo.module.scss';
import classNames from 'classnames/bind';
import { Humidity, TempSvg, WindSvg, Pressure } from '~/assets/imgs/index';

const InfoIcons = {
    Humidity: <Humidity />,
    Sunrise: <TempSvg />,
    Sunset: <TempSvg />,
    Wind: <WindSvg />,
    Pressure: <Pressure />,
};

const cx = classNames.bind(styles);

function WeatherInfo({ name, value }) {
    return (
        <div className={cx('container')}>
            {InfoIcons[name]}
            <div className={cx('info-label')}>
                {value}
                <span>{name}</span>
            </div>
        </div>
    );
}

export default WeatherInfo;

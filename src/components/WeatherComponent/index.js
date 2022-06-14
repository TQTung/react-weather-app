import styles from './WeatherComponent.module.scss';
import classNames from 'classnames/bind';
import * as WeatherIcons from '~/assets/imgs';
import WeatherInfo from '~/components/WeatherComponent/WeatherInfo';

const cx = classNames.bind(styles);
const WeatherIconsLink = {
    '01d': <WeatherIcons.SunnySvg />,
    '01n': <WeatherIcons.Night />,
    '02d': <WeatherIcons.DaySvg />,
    '02n': <WeatherIcons.CloudyNight />,
    '03d': <WeatherIcons.Cloudy />,
    '03n': <WeatherIcons.Cloudy />,
    '04d': <WeatherIcons.PerfectDay />,
    '04n': <WeatherIcons.CloudyNight />,
    '09d': <WeatherIcons.RainSvg />,
    '09n': <WeatherIcons.RainNight />,
    '10d': <WeatherIcons.RainSvg />,
    '10n': <WeatherIcons.RainNight />,
    '11d': <WeatherIcons.StormSvg />,
    '11n': <WeatherIcons.StormSvg />,
};

function WeatherComponent({ weather }) {
    const getTime = (time) => {
        return `${new Date(time * 1000).getHours()} : ${new Date(time * 1000).getMinutes()}`;
    };
    return (
        <>
            {typeof weather.main !== 'undefined' ? (
                <div className={cx('content')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('temp')}>
                            <span>
                                {Math.round(weather.main.temp) - 273}
                                <sup>o</sup>C
                            </span>{' '}
                            | {weather.weather[0].description}
                        </div>
                        <div className={cx('icon-weather-day')}>{WeatherIconsLink[weather.weather[0].icon]}</div>
                    </div>
                    <span className={cx('location')}>
                        {weather.name}, {weather.sys.country}
                    </span>
                    <span className={cx('weather-info')}>Weather Info</span>
                    <div className={cx('weather-info-container')}>
                        <WeatherInfo name="Humidity" value={weather.main.humidity} />
                        <WeatherInfo
                            name={weather.weather[0].icon.includes('n') ? 'Sunset' : 'Sunrise'}
                            value={getTime(weather.sys[weather.weather[0].icon.includes('n') ? 'sunset' : 'sunrise'])}
                        />
                        <WeatherInfo name="Wind" value={weather.wind.speed} />
                        <WeatherInfo name="Pressure" value={weather.main.pressure} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}

export default WeatherComponent;

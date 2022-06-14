import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import SearchCity from './components/SearchCitys';
import WeatherComponent from '~/components/WeatherComponent';
import axios from 'axios';

const cx = classNames.bind(styles);
const API_KEY = '4230d794eafd84a5b9e6a6b2d025f627';

function App() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({});

    const fetchWeather = async (e) => {
        e.preventDefault();
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`);
        setInput('');
        setWeather(result.data);
    };
    return (
        <div className={cx('app')}>
            <div className={cx('container')}>
                <span className={cx('title')}>React Weather App</span>
                <SearchCity input={input} setInput={setInput} fetchWeather={fetchWeather} />
                <WeatherComponent weather={weather} />
            </div>
        </div>
    );
}

export default App;

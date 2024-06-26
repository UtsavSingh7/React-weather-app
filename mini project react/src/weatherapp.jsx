import React, { useState } from 'react';
import SearchBox from "./SearchBox";
import Infobox from "./Infobox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 24.04,
        temp: 25.05,
        temp_min: 21.05,
        temp_max: 25.05,
        humidity: 47,
        weather: "haze"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App By MicroHard</h2>
            <SearchBox updateInfo={updateInfo} />
            <Infobox info={weatherInfo} />
        </div>
    );
}

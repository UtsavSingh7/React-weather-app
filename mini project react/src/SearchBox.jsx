import React, { useState } from 'react';
import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const Api_url = "http://api.openweathermap.org/data/2.5/weather";
    const Api_key = "fe98532d6082cd9b4fea56485bd8c56d";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${Api_url}?q=${city}&appid=${Api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error('Error fetching the weather data: ', error);
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        const newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="CITY NAME"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}

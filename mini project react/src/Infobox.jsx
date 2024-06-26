import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css";

export default function Infobox({ info }) {
    return (
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://media.istockphoto.com/id/1064083590/photo/winter-scene-snowfall-in-the-woods.webp?b=1&s=170667a&w=0&k=20&c=2oN3sxPMEPVxMUuxGSwLqBfEVCjcGBr-yhbgyV8s8B4="
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature: {info.temp} °C</p>
                            <p>Humidity: {info.humidity} %</p>
                            <p>Min Temp: {info.temp_min} °C</p>
                            <p>Max Temp: {info.temp_max} °C</p>
                            <p>The weather feels like {info.feels_like} °C</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

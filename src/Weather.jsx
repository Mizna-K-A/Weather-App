import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    'https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric'
                );
                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchWeather();
    },);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-5">Error: {error}</div>;
    }

    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="card d-flex align-items-center text-light" style={{height:'70vh',background:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg-xMojjW8vMseW6ztC1klRBuEAqLyaXdbQ&s")',backgroundSize:'cover'}}>
                <div className="card-body">
                    <h3 className="card-title">
                        Weather in {weatherData.name}, {weatherData.sys.country}
                    </h3>
                    <p className="card-text">
                        <span>Temperature:</span> {weatherData.main.temp}°C
                    </p>
                    <p className="card-text">
                        <span>Feels Like:</span> {weatherData.main.feels_like}°C
                    </p>
                    <p className="card-text">
                        <span>Minimum Temperature:</span> {weatherData.main.temp_min}°C
                    </p>
                    <p className="card-text">
                        <span>Maximum Temperature:</span> {weatherData.main.temp_max}°C
                    </p>
                    <p className="card-text">
                        <span>Pressure:</span> {weatherData.main.pressure} mb
                    </p>
                    <p className="card-text">
                        <span>Weather:</span> {weatherData.weather[0].description}
                    </p>
                    <p className="card-text">
                        <span>Humidity:</span> {weatherData.main.humidity}%
                    </p>
                    <p className="card-text">
                        <span>Wind Speed:</span> {weatherData.wind.speed} m/s
                    </p>
                    
                    <p className="card-text">
                        <span>Sea Level:</span> {weatherData.main.sea_level} mb
                    </p>
                    <p className="card-text">
                        <span>Ground Level:</span> {weatherData.main.grnd_level} mb
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Weather;

import React, {useState, useEffect} from 'react';
import axios from "axios";
import WeatherDetail from "../../Components/WeatherDetail/WeatherDetail";
import createTimeString from "../../helper/createTimeString";

const apiKey = 'b7ae113310db05940950e41fd1692a30'

function TodayTab({coordinates}) {

    const [todayForecast, setTodayForecast] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getTodayForecast() {
            setLoading(true);
            setError(false)
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,daily&appid=${apiKey}`);

                setTodayForecast([
                    result.data.hourly[3],
                    result.data.hourly[5],
                    result.data.hourly[7]
                ]);
                console.log(result.data)

            } catch (e) {
                console.error(e)
                setError(true)
            }
            setLoading(false)
        }

        if (coordinates) {
            getTodayForecast();
        }

    }, [coordinates])

    return (
        <div className="tab-wrapper">
            {todayForecast &&
            <>
                <div className="chart">
                    {todayForecast.map((forecast) => {
                        return <WeatherDetail
                            key={forecast.dt}
                            temp={forecast.temp}
                            type={forecast.weather[0].main}
                            description={forecast.weather[0].description}
                        />
                    })}
                </div>
                <div className="legend">
                    {todayForecast.map((forecast) => {
                        return <span key={forecast.dt}>{createTimeString(forecast.dt)}</span>
                    })}
                </div>
            </>
            }
            {error && <span>Er is iets misgegaan met het ophalen van de data.</span>}
            {loading && (<span>Loading...</span>)}
        </div>
    )
}

export default TodayTab
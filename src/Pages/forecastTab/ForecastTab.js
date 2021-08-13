import React, {useState, useEffect, useContext} from 'react'
import axios from "axios";
import './ForecastTab.css'
import kelvinToCelcius from "../../helper/kelvinToCelcius";
import createDateString from "../../helper/createDateString";
import { TempContext } from '../../Components/context/TempProvider'

const apiKey = 'b7ae113310db05940950e41fd1692a30'

function ForecastTab({coordinates}) {

    const [forecasts, setForecasts] = useState(null);
    const [error, setError] = useState(false);
    const {kelvinToMetric} = useContext(TempContext);


    useEffect(() => {

        async function fetchDataForecast() {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);

                setForecasts(result.data.daily.slice(1, 6));
                console.log(result.data)
                console.log(forecasts)
            } catch (e) {
                console.error(e)
                setError(true)
            }
        }

        if (coordinates) {
            fetchDataForecast();
        }
    }, [coordinates])


    return (
        <div className="forecast-tab-wrapper">
            {forecasts && forecasts.map((forecast) => {
                return (
                    <article className="forecast-day" key={forecast.dt}>
                        <p>{createDateString(forecast.dt)}</p>
                        <section className="forecast-weather">
                            <span>
                                {kelvinToMetric(forecast.temp.day)}
                            </span>
                            <span className="weather-description">
                                {forecast.weather[0].description}
                            </span>
                        </section>
                    </article>
                )
            })
            }
            {error &&
            <span>
                <p>There is something wrong with the data fetching.</p>
            </span>
            }
            {(!forecasts && !error) &&
            <span>
                <p>Please fill in the location first</p>
            </span>
            }
        </div>
    )
}

export default ForecastTab
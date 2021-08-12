import './App_new.css';
import SearchBar from "./Components/SearchBar/SearchBar";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import ForecastTab from "./Pages/forecastTab/ForecastTab";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TodayTab from "./Pages/todayTab/TodayTab";
import TabBarMenu from "./Components/TabBarMenu/TabBarMenu";
import MetricSlider from "./Components/MetricSlider/MetricSlider";
import kelvinToCelcius from "./helper/kelvinToCelcius";

const apiKey = 'b7ae113310db05940950e41fd1692a30'

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        async function fetchData() {
            setLoading(true)/*注意在TRY上面外面写*/
            setError(false)/*注意在TRY上面外面写*/
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
                setWeatherData(result.data)
                console.log(result.data)
                console.log(location)
            } catch (e) {
                console.error(e)
                setError(true);
            }

            setLoading(false)/*注意在TRY/CATCH外面写*/
        }

        if (location) {
            fetchData()
        }
    }, [location])
    return (
        <div className='app-container'>
            <div className='header-container'>
                <SearchBar setLocationChild={setLocation}/>
                {error && /*在最底下写error*/
                <span>
                <p>Oops, this location does not exist.</p>
            </span>
                }
                {loading &&
                <span>
                <p>Loading</p>
            </span>}
                <span>
                {weatherData &&
                <>
                    <h2>{weatherData.weather[0].description}</h2>
                    <h3>{weatherData.name}</h3>
                    <h1>{kelvinToCelcius(weatherData.main.temp)}</h1>
                </>
                }
            </span>


            </div>
            <Router>
                <div className='weather-content'>
                    <TabBarMenu/>
                    <div className='tab-wrapper'>
                        <Switch>
                            <Route exact path='/'>
                                <TodayTab coordinates = {weatherData && weatherData.coord} />
                            </Route>
                            <Route path='/komende-week'>
                                <ForecastTab coordinates={weatherData && weatherData.coord}/>
                            </Route>
                        </Switch>
                    </div>

                </div>
            </Router>
            <MetricSlider/>
        </div>

    );
}

export default App;

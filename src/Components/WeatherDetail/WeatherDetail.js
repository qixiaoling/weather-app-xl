import React from 'react';
import kelvinToCelcius from "../../helper/kelvinToCelcius";
import iconMapper from "../../helper/icons/iconMapper";

function WeatherDetail({temp, type, description}) {
    return(
        <section className='day-part'>
            <span className='icon-wrapper'>
                {iconMapper(type)}
            </span>
            <p className='description'>{description}</p>
            <p>{kelvinToCelcius(temp)}</p>
        </section>
    )
}
export default WeatherDetail
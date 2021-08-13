import React from 'react';
import {ReactComponent as Sunny} from './sun.svg';
import {ReactComponent as Rain} from './rain.svg';
import {ReactComponent as Clouds} from './clouds.svg';
import {ReactComponent as Snow} from './snow.svg';
import {ReactComponent as Wind} from './wind.svg';
import {ReactComponent as Drizzle} from './sun-rain.svg';

function iconMapper(weatherType) {
    switch (weatherType) {
        case 'Clouds':
            return <Clouds/>;
        case 'Clear':
            return <Sunny />;
        case 'Drizzle':
            return <Drizzle />;
        case 'Rain':
            return <Rain />;
        case 'Snow':
            return <Snow />;
        case 'Mist':
        case 'Haze':
        case 'Smoke':
        case 'Fog':
        default:
            return <Wind />;
    }
}
export default iconMapper

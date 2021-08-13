import React from 'react';
import {NavLink} from 'react-router-dom';
function TabBarMenu(){
    return(
        <nav className='tab-bar'>
            <ul>
                <li>
                    <NavLink className='active' exact to='/'>
                        Vandaag
                    </NavLink>
                </li>
                <li>
                    <NavLink className='active' exact to='/komende-week'>
                        Komende week
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default TabBarMenu
import React from 'react';
import {NavLink} from 'react-router-dom';
import './TabBarMenu.css'
function TabBarMenu(){


    return(
        <nav className='tab-bar'>
            <ul className='tab-bar-list'>
                <li>
                    <NavLink activeClassName='active' exact to='/' >
                        Vandaag
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' exact to='/komende-week'>
                        Komende week
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default TabBarMenu
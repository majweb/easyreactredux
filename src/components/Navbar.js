import React from 'react';
import {NavLink,withRouter } from 'react-router-dom';


const navbar = (props) => {
    return(
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li> 
        </ul>
    )
}
export default withRouter(navbar);
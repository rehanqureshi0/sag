import React from 'react'
import '../style/menu.css';

function Menu() {
    return (
        <>
           <div class='menu'>
                <span class='toggle'>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
                <div class='menuContent'>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    </ul>
                </div>
            </div> 
        </>
    )
}

export default Menu

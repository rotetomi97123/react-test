import React from 'react'
import logo from './images/earth.svg'

export default function Navbar(){
    return(
        <nav className='navbar'>
           <img alt=""className="logo"src={logo}></img>
           <h1>my travel journal.</h1>
        </nav>
    )
}
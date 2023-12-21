import React from 'react'
import logo from './assets/icon1.png'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='logo' width='70' height='50' />
            <h1>Keep</h1>
        </div>
    )
}

export default Header
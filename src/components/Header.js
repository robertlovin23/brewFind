import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">BrewFind</Link>
            <div className="nav-right" style={{display: "block"}}>
                <GoogleAuth/>
            </div>
        </nav>
    )
}

export default Header;
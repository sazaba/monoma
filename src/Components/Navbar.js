import React from 'react'
import { Link } from 'react-router-dom'
import Grocasa from '../images/Grocasa.png'

function Navbar() {
    return (
        <div className='navbar_container'>
            <Link className='link' to='/'>
                <img src={Grocasa} alt='' />
            </Link>

        </div>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';
import '../components/navbar.css'

function navbar() {
    return (
        <div className="navbar">
            <nav>
                <div className="navbar__logo">
                    MERN Shopping Cart
                </div>

                <ul className="navbar__link">
                    <li>
                        <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                            Cart
                        <span className="cart__badge">0</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/shop'>
                           Shop 
                        
                        </Link>
                    </li>

                </ul>

                <div className="hamburger__menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </div>
    )
}

export default navbar

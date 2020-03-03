import React from 'react';
import NavbarMsg from '../NavbarMsg';
import './style.css';

function Navbar(props) {
    return (
        <nav className='navbar'>
            <ul>
                <li className='brand'>
                    <a href='/'>Click Game</a>
                </li>
                <NavbarMsg score={props.score} topScore={props.topScore} />
                <li>
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
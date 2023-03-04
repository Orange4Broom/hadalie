import './navigation.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Icon from '../icon/Icon';

function Navigation() {

    const [menuIsClosed, setMenuIsClosed] = useState(true);

    const toggleMenu = () => {
        setMenuIsClosed(!menuIsClosed);
      };

    return (

        <>
        <div className='Navigation'>
            <Link className='logo-link' to='/'><img className='logo' src="/images/logo.png" alt="logo" /></Link>
            <div className='links'>
                <ul>
                    <li className='show activeline'><Link to='/'>Domů </Link></li>
                    <li className='show activeline'><Link to='/about'>O nás </Link></li>
                    <li className='show activeline'><Link to='/handicaps'>Handicapy </Link></li>
                    <li className='show activeline'><Link to='/contact'>Kontakt </Link></li>

                    <li className={`hidden ${menuIsClosed ? '' : 'closed'}`}><button className='menu-button' onClick={toggleMenu}><Icon name='bars' type='fas' /></button></li>
                </ul>
            </div>
        </div>
        <div className={`menu ${menuIsClosed ? 'closed' : ''}`}>
            <button className='close-button' onClick={toggleMenu}><Icon name='xmark' type='fas' /></button>
            <ul>
                    <li><Link to='/'><Icon name='artstation' type='fab' /> Domů </Link></li>
                    <li><Link to='/about'><Icon name='terminal' type='fas' />O nás </Link></li>
                    <li><Link to='/handicaps'><Icon name='signal' type='fas' />Handicapy </Link></li>
                    <li><Link to='/contact'><Icon name='signal' type='fas' />Kontakt </Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navigation;
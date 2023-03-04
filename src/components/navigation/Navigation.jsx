import './navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='Navigation'>
            <Link className='logo-link' to='/'><img className='logo' src="/images/logo.png" alt="logo" /></Link>
            <div className='links'>
                <ul>
                    <li className='show activeline'><Link to='/'>Domů </Link></li>
                    <li className='show activeline'><Link to='/'>O nás </Link></li>
                    <li className='show activeline'><Link to='/'>Handicapy </Link></li>
                    <li className='show activeline'><Link to='/'>Kontakt </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;
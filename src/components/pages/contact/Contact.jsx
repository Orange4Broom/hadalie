import Icon from '../../icon/Icon';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';


function Contact() {
    AOS.init();
    return (
        <div className="Contact">
            <Navigation />
            <h1 className='headers top' data-aos="fade-down">Máte nějaký zajímavý příběh?</h1>
            <h1 className='headers bottom' data-aos="fade-down">Nebojte se nás kontaktovat</h1>

            <div className='contacts'>
                <p data-aos="fade-right">E-mail: testemail@gmail.com</p>
                <p data-aos="fade-left">Telefon: +420 768 986 893</p>
            </div>

            <div data-aos="fade-up" className='socials'>
                <Link><Icon name='instagram' type='fab' /></Link>
                <Link><Icon name='facebook' type='fab' /></Link>
                <Link><Icon name='twitter' type='fab' /></Link>
                <Link><Icon name='discord' type='fab' /></Link>
                <Link><Icon name='linkedin' type='fab' /></Link>
            </div>
        </div>
    )
}

export default Contact;
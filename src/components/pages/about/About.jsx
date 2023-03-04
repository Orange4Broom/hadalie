import Navigation from '../../navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

function About() {
    AOS.init();
    return (
        <div className='About'>
            <Navigation />
            <h1 data-aos="fade-up" className='header'>O nás</h1>
            <p data-aos="fade-up" className='paragraf'>
                Jsme webová stránka, která se pomocí příběhu snaží přiblížit pohled na život lidi s handicapem. Jak je jejich handycap ovlivnuje a jak moc jim zasahuje do života.
            </p>
        </div>
    )
}

export default About;
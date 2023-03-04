import LinkButton from '../../linkbutton/LinkButton';
import Navigation from '../../navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';

function Home() {
    AOS.init();
    return(
        <div className="Home">
            <Navigation />
            <div className='content-wrapper'>
                <div className='left'>
                    <h1 data-aos="fade-right" className='name-header'>Hadalie</h1>

                    <div className='motos'>
                    <p data-aos="fade-right" className='moto-1'>Místo kde <span className='oranged'>handicapy</span> </p>
                    <p data-aos="fade-right" className='moto-2'>získávají více <span className='oranged'>pozornosti</span></p>
                    </div>
                    <LinkButton />
                </div>
                <div className='right'>
                    <img data-aos="fade-left" src="/images/illustration.svg" alt="illustration" />
                </div>
            </div>
        </div>
    )
}

export default Home;
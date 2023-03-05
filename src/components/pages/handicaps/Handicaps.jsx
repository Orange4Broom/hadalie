import './handicaps.css';
import Navigation from '../../navigation/Navigation';
import { Link } from 'react-router-dom';
import Card from '../../card/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Handicaps() {
    AOS.init();
    const handicapy = ['ALS', 'Svalová atrofie', 'Úrazy páteře', 'CMD', 'Mozková obrna'];

    return (
       <div className="Handicaps">
            <Navigation />
            <div className='content-wrapper'>
                <div className='handicaps'>
                    <h1 data-aos="fade-down" className='header-name'>Handicapy</h1>
                    <ul>
                        {handicapy.map((item) => (
                            <li data-aos="fade-right"><Link className='handicap' to='/illness'>{item}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className='stories'>
                    <h1 className='header-name'>Příběhy</h1>
                    <div className='list'>
                        <Card 
                            name='Josef' 
                            story='Josef se narodil s poruchou sluchu, což znamenalo, že měl omezené možnosti komunikace se světem kolem sebe. Jeho rodina se však snažila mu poskytnout co nejlepší podporu a pomáhat mu rozvíjet jeho schopnosti.' 
                        />
                        <Card 
                            name='Anonymní' 
                            story='Anonymní člověk, který měl poruchuNakonec se rozhodl, že založí komunitu pro lidi s poruchou zraku, kde by se mohli navzájem podporovat a sdílet své zkušenosti. Vytvořil online platformu, kde by mohli lidé s podobnými zdravotními problémy navzájem komunikovat a sdílet tipy a triky, jak si usnadnit každodenní život.' 
                        />
                        <Card 
                            name='Anonymní' 
                            story='Anonymní člověk s poruchou mobility se narodil s tělesným postižením, které mu bránilo v chůzi. Musel se pohybovat v invalidním vozíku a celý život byl omezen svým zdravotním stavem.' 
                        />
                       
                        
                    </div>

                    
                </div>
            </div>
       </div>
    )
}

export default Handicaps;
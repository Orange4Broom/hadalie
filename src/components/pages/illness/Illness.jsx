import './illness.css';
import Navigation from '../../navigation/Navigation';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Illness() {
    AOS.init();
    return (
        <div className='Illness'>
            <Navigation />
            <div className='content-wrapper'>
                <div className='handicap-div'>
                    <h1 data-aos="fade-right" className='ASL'>ASL</h1>
                    <p data-aos="fade-up" className='info'>Osoby trpící ALS (amyotrofickou laterální sklerózou) mohou mít různé symptomy a úrovně postižení v závislosti na stadiu nemoci. Obecně lze říci, že ALS ovlivňuje motorické funkce těla, což může vést ke ztrátě svalové síly, ochrnutí, zhoršené koordinaci svalových pohybů, těžkostem při mluvení, polykání a dýchání. Některé další symptomy, které mohou být spojeny s ALS, zahrnují únavu, křeče, svalové křeče a křeče, bolest a problémy s pamětí a kognitivními funkcemi.
                        Lidé s ALS mohou být obvykle plně vědomi svého okolí a mají často plné vnímání, ale nemohou pohybovat svaly podle své vůle. To může být velmi frustrující a může mít značný dopad na psychické zdraví a kvalitu života postižené osoby. Nicméně existuje mnoho typů terapie a podpůrných služeb, které mohou pomoci lidem s ALS a jejich rodinám zvládat symptomy a poskytovat kvalitní péči a podporu.
                    </p>
                </div>
                <div className='sbirky'>
                    <h1 className='ASL'>Sbírky</h1>
                    <Link to='https://www.zsalsa.cz/'>
                        <div>
                            <h1>Zsalsa</h1>
                        </div>
                    </Link>
                    <Link to='https://www.donio.cz/sdmo'>
                        <div>
                            <h1>Donio</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Illness;
import './story.css';
import Navigation from '../../navigation/Navigation';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Story() {
    AOS.init();
    return (
        <div className='Illness'>
            <Navigation />
            <div className='content-wrapper'>
                <div className='handicap-div'>
                    <h1 data-aos="fade-right" className='ASL'>Josef</h1>
                    <p data-aos="fade-up" className='info'>
                        Josef se narodil s poruchou sluchu, což znamenalo, že měl omezené možnosti komunikace se světem kolem sebe. Jeho rodina se však snažila mu poskytnout co nejlepší podporu a pomáhat mu rozvíjet jeho schopnosti.

                        Když Josef vyrostl, rozhodl se, že se stane malířem. Byl fascinován tím, jak barvy a tvary mohou vyjádřit to, co slovy nelze vyjádřit. Navštěvoval speciální uměleckou školu pro osoby s poruchou sluchu a věnoval se malování s velkým zaujetím.
                        Vašek měl od narození poruchu paměti. Jeho mozek nemohl uchovávat informace na dlouhodobější bázi, takže si nebyl schopen pamatovat jména a tváře lidí, ani co se stalo před několika dny.

                        Jeho každodenní život byl plný výzev, ale Vašek se nenechal odradit. Zjistil, že si může vést deník, ve kterém si zaznamenává důležité informace a události, aby je mohl později přečíst a lépe si je zapamatovat.
                    </p>
                </div>
                <div className='sbirky'>
                    <h1 className='ASL'>Sbírky</h1>
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

export default Story;
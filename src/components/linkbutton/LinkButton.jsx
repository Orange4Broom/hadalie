import { Link } from 'react-router-dom';
import './linkbutton.css';

function LinkButton() {
    return (
        <>
            <Link className='link-button' to='About'>
                <button data-aos="fade-up"  data-aos-offset="0" className='next-button'>Zjistit více...</button>
            </Link>
        </>
    )
}

export default LinkButton;
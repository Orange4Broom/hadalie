import { Link } from 'react-router-dom';
import './card.css';

const Card = ({name, story}) => (
    <Link className='hover' to='/story'>
        <div className='card'>
            <p className='name'>{name}</p>
            <p className='story'>{story}</p>        
        </div>
    </Link>
)

export default Card;
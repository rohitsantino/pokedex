import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {Logo} from '../Logo';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar({inputVal}) {
    const navigate=useNavigate();
    const handleChange=(e)=>{
        inputVal(e.target.value);
    }
    const favPokemonsLength=useSelector(state=>state.favorites.favorites.length);
    return (
        <div className={styles.navBar}>
            <Logo />
            <div className={styles.navRight}>
                <div className={styles.favoriteBadge} onClick={()=>navigate('/favorites')}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span className={styles.badge}>{favPokemonsLength}</span>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search..." onChange={handleChange}/>
                </div>
            </div>
        </div>
    );
}

import { Logo } from '../Logo';
import styles from './FavoritesNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function FavoritesNav() {
    const navigate=useNavigate();
    return (
        <div className={styles.navBar}>
            <Logo />
            <div className={styles.navRight}>
                <div className={styles.favoriteBadge} onClick={()=>navigate('/favorites')}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span className={styles.badge}>3</span>
                </div>
            </div>
        </div>
    )
}

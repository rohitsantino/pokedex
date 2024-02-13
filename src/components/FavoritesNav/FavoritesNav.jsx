import { Logo } from '../Logo';
import styles from './FavoritesNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FavoritesNav() {
    return (
        <div className={styles.navBar}>
            <Logo />
            <div className={styles.navRight}>
                <div className={styles.favoriteBadge}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span className={styles.badge}>3</span>
                </div>
            </div>
        </div>
    )
}

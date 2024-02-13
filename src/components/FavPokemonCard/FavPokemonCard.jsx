import styles from './FavPokemonCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function FavPokemonCard({ favPokemon }) {
    return (
        <div className={styles.pokemonCard}>
            <div className={styles.favoriteIcon}  >
                <FontAwesomeIcon icon={faHeart} color='red' />
            </div>
            <img src={favPokemon.image} alt='No image' />
            <div className={styles.pokemonName}>{favPokemon.name}</div>
        </div>
    )
}

import styles from './FavPokemonCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeFromFavorites } from '@redux/slices/favorites.slice';


export default function FavPokemonCard({ favPokemon }) {
    const dispatch = useDispatch();
    const handleRemoval = () => {
        dispatch(removeFromFavorites(favPokemon));
    }
    return (
        <div className={styles.pokemonCard}>
            <div className={styles.favoriteIcon} onClick={handleRemoval}>
                <FontAwesomeIcon icon={faHeart} color='red' />
            </div>
            <img src={favPokemon.image} alt='No image' />
            <div className={styles.pokemonName}>{favPokemon.name}</div>
        </div>
    )
}

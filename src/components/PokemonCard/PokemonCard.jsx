import React, { useState } from 'react';
import styles from './PokemonCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function PokemonCard({ pokemon }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => setIsFavorite(prevFavoriteBool => !prevFavoriteBool);
    return (
        <div className={styles.pokemonCard}>
            <div className={styles.favoriteIcon} onClick={toggleFavorite} >
                <FontAwesomeIcon icon={faHeart} color={isFavorite ? 'red' : 'gray'} />
            </div>
            <img src={pokemon.image} alt='No image' />
            <div className={styles.pokemonName}>{pokemon.name}</div>
        </div>
    )
}

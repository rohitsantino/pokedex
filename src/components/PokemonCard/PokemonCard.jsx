import React, { useEffect, useState } from 'react';
import styles from './PokemonCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '@redux/slices/favorites.slice';


export default function PokemonCard({ pokemon }) {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const favorites = useSelector(state => state.favorites.favorites);

    useEffect(() => {
        setIsFavorite(favorites.some(favorite => favorite.id === pokemon.id));
    }, [favorites, pokemon]);

    const toggleFavorite = () => {
        if (!isFavorite) {
            dispatch(addToFavorites(pokemon));
        }
        else{
            dispatch(removeFromFavorites(pokemon));
        }
        
        setIsFavorite(prevFavoriteBool => !prevFavoriteBool);
    }
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

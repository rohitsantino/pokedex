import { FavPokemonCard } from '../FavPokemonCard';
import styles from './FavPokemons.module.css';


export default function FavPokemons({favPokemons}) {
    return (
        <div className={styles.pokemonContainer}>
            {favPokemons.map((favPokemon,index) =>
                <FavPokemonCard favPokemon={favPokemon} key={index}/>
            )}
        </div>
    )
}

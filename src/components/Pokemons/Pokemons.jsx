import { PokemonCard } from '../PokemonCard';
import styles from './Pokemons.module.css';


export default function Pokemons({pokemons}) {
    console.log(pokemons);
    return (
        <div className={styles.pokemonContainer}>
            {pokemons.map(pokemon =>
                <PokemonCard pokemon={pokemon}/>
            )}
        </div>
    )
}

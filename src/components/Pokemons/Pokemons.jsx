import { PokemonCard } from '../PokemonCard';
import styles from './Pokemons.module.css';


export default function Pokemons({pokemons}) {
    return (
        <div className={styles.pokemonContainer}>
            {pokemons.map((pokemon,index) =>
                <PokemonCard pokemon={pokemon} key={index}/>
            )}
        </div>
    )
}

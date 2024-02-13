import { FavPokemonCard } from '../FavPokemonCard';
import styles from './FavPokemons.module.css';
import { NoPokemonAvailable } from '../NoPokemonAvailable';


export default function FavPokemons({favPokemons}) {
   return (
    <div className={styles.pokemonContainer}>
    {favPokemons.length === 0 ? (
      <NoPokemonAvailable />
    ) : (
      favPokemons.map((favPokemon, index) => (
        <FavPokemonCard favPokemon={favPokemon} key={index} />
      ))
    )}
  </div>
)
}


import {FavoritesNav} from '@components/FavoritesNav';
import styles from './Favorites.module.css';
import { pokemons } from '../../constants';
import {FavPokemons} from '@components/FavPokemons';

export default function Favorites() {
  return (
    <div>
      <FavoritesNav/>
      <FavPokemons favPokemons={pokemons}/>
    </div>
  )
}

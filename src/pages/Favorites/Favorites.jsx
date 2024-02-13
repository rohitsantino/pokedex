import {FavoritesNav} from '@components/FavoritesNav';
import styles from './Favorites.module.css';
import { pokemons } from '../../constants';
import {FavPokemons} from '@components/FavPokemons';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const favs=useSelector(state=>state.favorites.favorites);
  console.log(favs);
  return (
    <div>
      <FavoritesNav/>
      <FavPokemons favPokemons={pokemons}/>
    </div>
  )
}

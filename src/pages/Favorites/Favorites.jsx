import {FavoritesNav} from '@components/FavoritesNav';
import {FavPokemons} from '@components/FavPokemons';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const favPokemons=useSelector(state=>state.favorites.favorites);
  console.log(favPokemons);
  return (
    <div>
      <FavoritesNav/>
      <FavPokemons favPokemons={favPokemons}/>
    </div>
  )
}

import { Pokemons } from '@components/Pokemons';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
        <Pokemons/>
    </div>
  )
}

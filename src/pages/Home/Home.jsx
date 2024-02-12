import { Pokemons } from '@components/Pokemons';
import styles from './Home.module.css';
import { Navbar } from '@components/Navbar';

export default function Home() {
  return (
    <div className={styles.home}>
        <Navbar/>
        <Pokemons/>
    </div>
  )
}

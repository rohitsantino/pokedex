import React, { useEffect, useState } from 'react';
import { axios } from '@Axios';
import { Navbar } from '@components/Navbar';
import { Pokemons } from '@components/Pokemons';
import { FilterBar } from '@components/FilterBar';
import styles from './Home.module.css';


export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsData, setPokemonsData] = useState([]);
  const loadData = async () => {
    try {
      await axios.get('/pokemon/?offset=0&limit=10/').then(res => {
        const poks = res.data.results.map((pokemon, index) => {
          return {
            id: index + 1,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          }
        });

        setPokemons([...poks]);
        setPokemonsData([...poks]);
        console.log(newData, poks);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterVal = (val) => {
    if (val == "filterBy") {
      setPokemonsData([...pokemons]);
      console.log(pokemons);
    } else {
      const sortedPokemonsName = pokemonsData.sort((a, b) => a.name.localeCompare(b.name));
      setPokemonsData([...sortedPokemonsName]);
    }
  }
  useEffect(() => { loadData() }, []);

  return (
    <>
      <Navbar />
      <div className={styles.homeDashboard}>
        <FilterBar filterVal={handleFilterVal} />
        <Pokemons pokemons={pokemonsData} />
      </div>
    </>
  )
}

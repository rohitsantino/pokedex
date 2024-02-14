import React, { useEffect, useRef, useState } from 'react';
import { axios } from '@Axios';
import { Navbar } from '@components/Navbar';
import { Pokemons } from '@components/Pokemons';
import { FilterBar } from '@components/FilterBar';
import styles from './Home.module.css';


export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsData, setPokemonsData] = useState([]);
  const [initialCount, setInitialCount] = useState(0);
  const targetRef = useRef(null);

  const loadData = async () => {
    try {
      await axios.get(`/pokemon/?offset=${initialCount}&limit=8/`).then(res => {
        const poks = res.data.results.map((pokemon, index) => {
          return {
            id: index + 1,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          }
        });

        setPokemons([...pokemons,...poks]);
        setPokemonsData([...pokemons,...poks]);
        setInitialCount(prevInitialCount => prevInitialCount + 8);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterVal = (val) => {
    if (val == "filterBy") {
      setPokemonsData([...pokemons]);
    } else {
      const sortedPokemonsName = pokemonsData.sort((a, b) => a.name.localeCompare(b.name));
      setPokemonsData([...sortedPokemonsName]);
    }
  }

  const handleInputChange = (val) => {
    if (!val.trim()) { setPokemonsData([...pokemons]) }
    else {
      const searchedPokemons = pokemons.filter(pokemonData => {
        return pokemonData.name.toLowerCase().includes(val.toLowerCase());
      });
      setPokemonsData([...searchedPokemons]);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadData();
        }
      })
    }, { threshold: 0.25 });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect()
  }, [initialCount]);

  return (
    <>
      <Navbar inputVal={handleInputChange} />
      <div className={styles.homeDashboard}>
        <FilterBar filterVal={handleFilterVal} />
        <Pokemons pokemons={pokemonsData} />
      </div>
      <div ref={targetRef} />
    </>
  )
}

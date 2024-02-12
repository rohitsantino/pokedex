import React, { useEffect, useState } from 'react';
import { axios } from '@Axios';
import { PokemonCard } from '../PokemonCard';
import styles from './Pokemons.module.css';


export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const loadData = async () => {
        await axios.get('/pokemon/?offset=0&limit=10/').then(res => {
            const newPokemonData = res.data.results.map((pokemon, index) => {
                return {
                    id: index + 1,
                    name: pokemon.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }
            });
            setPokemons([...newPokemonData]);
        });
    };
    useEffect(() => { loadData() }, [])
    return (
        <div className={styles.pokemonContainer}>
            {pokemons.map(pokemon =>
                <PokemonCard pokemon={pokemon}/>
            )}
        </div>
    )
}

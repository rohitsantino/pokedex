import React, { useContext, useEffect, useState } from 'react';
import { axios } from '@Axios';
import { PokemonCard } from '../PokemonCard';
import styles from './Pokemons.module.css';
import {dropdownContext} from '@context/DropdownContext'


export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const[dropdownVal,setDropdownVal]=useContext(dropdownContext);
    const loadData = async () => {
        await axios.get('/pokemon/?offset=0&limit=10/').then(res => {
            const poks = res.data.results.map((pokemon, index) => {
                return {
                    id: index + 1,
                    name: pokemon.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }
            });
            
            setPokemons([...poks]);
            const newData=pokemons.sort((a,b)=>a.name.localeCompare(b.name))
            console.log(newData);
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

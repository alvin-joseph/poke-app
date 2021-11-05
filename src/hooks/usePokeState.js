import axios from 'axios';


import {useEffect, useState} from 'react';

const usePokeState = (initialPokemen, initialSelectedPokemon) => {
    const [pokemen, setPokemen] = useState(initialPokemen);
    const [selectedPokemon, setSelectedPokemon] = useState(initialSelectedPokemon);
    const [loading, setLoading] = useState(true);

    const getPokemonData = async (id) => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return res
    }
    
    useEffect(() => {
      const getPokemen = async () => {
        let pokemenArray = []
        for(let i = 1; i <= 151; i++){
          pokemenArray.push(await getPokemonData(i))
        }
        setPokemen(pokemenArray)
        setLoading(false)
      }
      getPokemen()
    }, [])
  
    const handlePoke = (id) => {
      getPokemonData(id)
        .then((data) => {
          setSelectedPokemon(data);
        });
    };
  
    return([pokemen, selectedPokemon, handlePoke, loading]); 
}

export default usePokeState;
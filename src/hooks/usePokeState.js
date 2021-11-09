import axios from 'axios'
import {useEffect, useState} from 'react'

import evoData from '../evoData'

const usePokeState = (initialPokemen, initialSelectedPokemon) => {
    const [pokemen, setPokemen] = useState(initialPokemen)
    const [selectedPokemon, setSelectedPokemon] = useState(initialSelectedPokemon)
    const [evolution, setEvolution] = useState([])
    const [loading, setLoading] = useState(true)
    const [clicked, setClicked] = useState(false)

    const getPokemonData = async (id) => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return res
    }

    const getEvoData = (id) => {
      return evoData[id]
    }
    
    const handlePoke = (id) => {
      getPokemonData(id)
        .then((res) => {
          setSelectedPokemon(res.data)
          setClicked(true)
        })
      setEvolution(getEvoData(id))
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
      handlePoke(1)
      // eslint-disable-next-line
    }, [])
  
    return([pokemen, selectedPokemon, evolution, handlePoke, loading, clicked])
}

export default usePokeState

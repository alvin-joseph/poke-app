import axios from "axios";
import { useState } from "react";

import evoData from "../evoData";

const usePokeState = (initialSelectedPokemon) => {
  const [selectedPokemon, setSelectedPokemon] = useState(
    initialSelectedPokemon
  );
  const [evolution, setEvolution] = useState([]);
  const [clicked, setClicked] = useState(false);

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  const getEvoData = (id) => {
    return evoData[id];
  };

  const handlePoke = (id) => {
    getPokemonData(id).then((res) => {
      setSelectedPokemon(res.data);
      setClicked(true);
    });
    setEvolution(getEvoData(id));
  };

  return [selectedPokemon, evolution, handlePoke, clicked];
};

export default usePokeState;

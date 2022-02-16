import React, { useState } from "react";
import "./App.css";

import { PokeList } from "./components/PokeList";
import { SelectedPoke } from "./components/SelectedPoke";
import usePokeState from "./hooks/usePokeState";

function App() {
  const [selectedPokemon, evolution, handlePoke, clicked] = usePokeState({});
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");

  const onChangeName = (e) => {
    setSearchName(e.target.value);
  };

  const onChangeType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <img className="title-img" src="/images/pokedex2.png" alt="pokedex" />
      </div>
      <div className="row">
        <input
          className="search"
          type="text"
          placeholder="Filter by name.."
          onChange={onChangeName}
        />
        <input
          className="search"
          type="text"
          placeholder="Filter by type.."
          onChange={onChangeType}
        />
      </div>
      <PokeList
        handlePoke={handlePoke}
        searchName={searchName}
        searchType={searchType}
      />
      <SelectedPoke
        selectedPokemon={selectedPokemon}
        clicked={clicked}
        evolution={evolution}
      />
    </div>
  );
}

export default App;

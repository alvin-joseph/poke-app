import React, { useState } from 'react'
import './App.css'

import { PokeList } from './components/PokeList'
import { SelectedPoke } from './components/SelectedPoke'
import usePokeState from './hooks/usePokeState'

function App() {
  const [pokemen, selectedPokemon, evolution, handlePoke, loading, clicked] = usePokeState([], {})
  const [searchName, setSearchName] = useState("")
  const [searchType, setSearchType] = useState("")

  const onChangeName = e => {
    setSearchName(e.target.value)
  }

  const onChangeType = e => {
    setSearchType(e.target.value)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <img className="title-img" src="/images/pokedex2.PNG" alt="pokedex"/>
      </div>
      <div className="row">
        <input className="search" type="text" placeholder="Filter by name.." onChange={onChangeName}/>
        <input className="search" type="text" placeholder="Filter by type.." onChange={onChangeType}/>
      </div>
      <PokeList 
        pokemen={pokemen} 
        handlePoke={handlePoke}
        loading={loading}
        searchName={searchName}
        searchType={searchType}
      />
      <SelectedPoke 
        selectedPokemon={selectedPokemon} 
        clicked={clicked}
        evolution={evolution}
      />
    </div>
  )
}

export default App

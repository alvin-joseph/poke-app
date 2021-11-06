import './App.css'

import { PokeList } from './components/PokeList'
import { SelectedPoke } from './components/SelectedPoke'
import usePokeState from './hooks/usePokeState'

function App() {
  const [pokemen, selectedPokemon, evolution, handlePoke, loading, clicked] = usePokeState([], {})

  return (
    <div className="container-fluid">
      <PokeList 
        pokemen={pokemen} 
        handlePoke={handlePoke}
        loading={loading}
      />
      <SelectedPoke 
        selectedPokemon={selectedPokemon} 
        clicked={clicked}
        evolution={evolution}
      />
    </div>
  );
}

export default App

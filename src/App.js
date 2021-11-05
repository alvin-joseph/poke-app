import './App.css';

import { PokeList } from './components/PokeList'
import usePokeState from './hooks/usePokeState';

function App() {
  const [pokemen, selectedPokemon, handlePoke, loading] = usePokeState([], {});

  return (
    <div className="container-fluid">
      <PokeList 
        pokemen={pokemen} 
        handlePoke={handlePoke}
        loading={loading}
      />
    </div>
  );
}

export default App;

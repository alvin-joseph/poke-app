import React from "react";

import "./PokeColors.css";

export const SelectedPoke = ({ selectedPokemon, clicked, evolution }) => {
  const convertHeight = selectedPokemon.height * (3.937).toFixed(2);
  const feet = Math.floor(convertHeight / 12);
  const inches = Math.floor(convertHeight - feet * 12);

  return clicked ? (
    <div
      className="modal fade"
      id="pokemonInfo"
      tabIndex="-1"
      aria-labelledby="pokemonInfoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="pokemonInfoLabel">
              {selectedPokemon.name.charAt(0).toUpperCase() +
                selectedPokemon.name.slice(1)}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            className={`modal-body
          ${
            selectedPokemon.types[1]
              ? selectedPokemon.types[0].type.name +
                "-" +
                selectedPokemon.types[1].type.name
              : selectedPokemon.types[0].type.name
          }`}
          >
            <h4>Height: {feet + "'" + inches + '"'}</h4>
            <h4>
              Weight: {(selectedPokemon.weight / 4.536).toFixed(2) + " lbs"}
            </h4>
            <ul className="stats">
              Stats:
              {selectedPokemon.stats.map((e) => (
                <li key={e.stat.url}>{e.stat.name + " - " + e.base_stat}</li>
              ))}
            </ul>
            <ul className="abilities">
              Abilities:
              {selectedPokemon.abilities.map((e) => (
                <li key={e.ability.url}>
                  {"slot " + e.slot + " -> " + e.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <div className="poke-footer">
              <h3>Evolution:</h3>
              <h4>
                {selectedPokemon.name.charAt(0).toUpperCase() +
                  selectedPokemon.name.slice(1)}
              </h4>
              {evolution.next_evolution &&
                evolution.next_evolution.map((e) => (
                  <h4 key={e.num}>{e.name}</h4>
                ))}
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

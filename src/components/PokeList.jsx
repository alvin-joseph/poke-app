import React from 'react'
import Loader from 'react-loader-spinner'

import './PokeColors.css'

export const PokeList = ({ pokemen, handlePoke, loading }) => {
    return (
        <div className="row">
            {loading && (
                <div className="spinner">
                    <Loader type="Puff" color="#204963" height="60" width="60" />
                    <p>Loading Pokemon...</p>
                </div>
            )}
            {pokemen.map((pokemon) => (
            <div
                onClick={() => handlePoke(pokemon.data.id)}
                key={pokemon.data.id}
                className={`col col-lg-2 col-md-3 col-sm-6 col-xs-12 poke-card 
                ${pokemon.data.types[1] ? pokemon.data.types[0].type.name + "-" + pokemon.data.types[1].type.name
                : pokemon.data.types[0].type.name}`}
            >
                <img 
                    className="poke-image"
                    src={pokemon.data.sprites.other.dream_world.front_default} 
                    alt={pokemon.data.name} 
                />
                <div className="poke-info">
                    <p>{console.log(pokemon.data)}</p>
                    <p
                        className="name"
                    >{(pokemon.data.name).charAt(0).toUpperCase() + (pokemon.data.name).slice(1)}
                    </p>
                    <p>Type: {pokemon.data.types[0].type.name.charAt(0).toUpperCase() + (pokemon.data.types[0].type.name).slice(1)}
                        {pokemon.data.types[1] && `/${pokemon.data.types[1].type.name.charAt(0).toUpperCase() + (pokemon.data.types[1].type.name).slice(1)}`}
                    </p>
                </div>
            </div>
            ))}
        </div>
    )
}

import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
import useFireStore from "../hooks/useFirestore";

import "./PokeColors.css";

export const PokeList = ({ handlePoke, searchName, searchType }) => {
  const { pokemen, loading } = useFireStore();
  const [currentImage, setCurrentImage] = useState("/images/pokeball.png");
  pokemen.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  const filterByName = (val) => {
    if (searchName === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
      return val;
    }
  };
  const filterByType = (val) => {
    if (searchType === "") {
      return val;
    } else if (
      val.type[0].type.name.toLowerCase().includes(searchType.toLowerCase())
    ) {
      return val;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage(null);
    }, 4000);
  }, []);
  return (
    <div className="row justify-content-center">
      {loading && (
        <div className="spinner">
          <Loader type="Puff" color="#204963" height="60" width="60" />
          <p>Loading Pokémon...</p>
        </div>
      )}
      {pokemen
        .filter(filterByName)
        .filter(filterByType)
        .map((pokemon, i) => (
          <motion.div
            onClick={() => handlePoke(pokemon.id)}
            key={pokemon.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
            data-bs-toggle="modal"
            data-bs-target="#pokemonInfo"
            className={`col col-lg-2 col-md-3 col-sm-6 col-xs-12 poke-card 
                ${
                  pokemon.type[1]
                    ? pokemon.type[0].type.name +
                      "-" +
                      pokemon.type[1].type.name
                    : pokemon.type[0].type.name
                }`}
          >
            <h2 className="poke-number">
              {pokemon.id.toString().length === 1
                ? "#00" + pokemon.id
                : pokemon.id.toString().length === 3
                ? "#" + pokemon.id
                : "#0" + pokemon.id}
            </h2>
            {currentImage ? (
              <img src={currentImage} alt="pokeball" />
            ) : (
              <motion.img
                className="poke-image"
                src={pokemon.img}
                alt={pokemon.name}
                initial={{ scale: 0.5 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.3, delay: i * 0.2 },
                  transitionEnd: { duration: 0, delay: 0 },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
              />
            )}
            <div className="poke-info">
              <p className="name">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </p>
              <p>
                Type:{" "}
                {pokemon.type[0].type.name.charAt(0).toUpperCase() +
                  pokemon.type[0].type.name.slice(1)}
                {pokemon.type[1] &&
                  `/${
                    pokemon.type[1].type.name.charAt(0).toUpperCase() +
                    pokemon.type[1].type.name.slice(1)
                  }`}
              </p>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

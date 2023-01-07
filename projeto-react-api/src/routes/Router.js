import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import HomePage from "../Pages/PokemonListPage/PokemonListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:pokemonName" element={<DetailsPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

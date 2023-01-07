import React, { useEffect, useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import GlobalStyle from "./GlobalStyle";
import axios from "axios";
import { BASE_URL } from "./constants/url";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [pokelist, setPokelist] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [flow, setFlow] = useState(1);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?offset=0&limit=100`);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Opa, tivemos um problema na busca");
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokelist();
  }, []);

  const addToPokedex = (poke) => {
    setPokedex([...pokedex, poke]);
  };
  const removeToPokedex = (poke) => {
    setPokedex(pokedex.filter((pok) => pok.name !== poke.name));
  };
  const handleAdd = (name) => {
    setPokedex([...pokedex, name]);
    console.log(name)
  };
  const handleDelet = (name) => {
    setPokedex(pokedex.filter((pok) => pok.name !== name.name));
  };

  const context = {
    fetchPokelist,
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    pokemon,
    setPokemon,
    isOpen,
    setIsOpen,
    flow,
    setFlow,
    addToPokedex,
    removeToPokedex,
    handleDelet,
    handleAdd,
   
  };

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
        <Router />
        <GlobalStyle />
      </GlobalContext.Provider>
    </ChakraProvider>
  );
};

export default App;

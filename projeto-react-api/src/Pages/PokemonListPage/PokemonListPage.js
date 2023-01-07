import React, { useContext } from "react";
import Card from "../../Components/PokemonCard/PokemonPage";
import Header from "../../Components/Header/HeaderPage";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, ContainerCard, Title } from "./PokemonListPageStyle";

const HomePage = () => {
  const context = useContext(GlobalContext);

  const { pokelist, setPokelist } = context;

  const filterPokemon = (pokeName) => {
    const pokeFilter = pokelist.filter((pokemon) => pokemon.name !== pokeName);
    setPokelist(pokeFilter);
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Alls Pokemons</h1>
        </Title>
        <ContainerCard>
          {pokelist
            .map((pokemon) => {
              console.log(pokemon.url.split("/"));
              return (
                <Card
                  key={pokemon.name}
                  pokemonUrl={pokemon.url}
                  pokemon={pokemon}
                  filterPokemon={filterPokemon}
                />
              );
            })
            .sort((a, b) => {
              const primeiro = a?.props?.pokemon?.url?.split("/");
              const segundo = b?.props?.pokemon?.url?.split("/");
              // console.log(primeiro[6])
              if (Number(primeiro[6]) < Number(segundo[6])) {
                return -1;
              }
              if (Number(primeiro[6]) > Number(segundo[6])) {
                return 1;
              }
              return 0;
            })}
        </ContainerCard>
      </Container>
    </>
  );
};

export default HomePage;

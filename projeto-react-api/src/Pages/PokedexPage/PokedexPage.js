import React, { useContext } from "react";
import Card from "../../Components/PokemonCard/PokemonPage";
import Header from "../../Components/Header/HeaderPage";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, ContainerCard, Title } from "./PokedexStyle";

const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const {pokedex, setPokedex} = context

  return (
    <>
      <Header />
      <Container>
        <Title>
        <h1>My Pokemons</h1>
        </Title>
        <ContainerCard>
        {pokedex.map((pokemon) => {
          return (
            <Card key={pokemon.name} pokemon={pokemon}/>
          )
        })}
        </ContainerCard>
      </Container>
    </>
  );
};

export default PokedexPage;
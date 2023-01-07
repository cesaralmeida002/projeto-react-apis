import React, {useContext} from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { ButtonDelet, ButtonPokedex, ButtonPokemon, Container, ButtonAdd } from "./HeaderStyle";
import { GlobalContext } from "../../contexts/GlobalContext";
import ModalCard from "../Modal/modalCard";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const context = useContext(GlobalContext);

  const {handleDelet, handleAdd, pokedex, pokemon} = context;
    
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
            <div>
            
            </div>
            <ButtonPokedex>
              <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
            </ButtonPokedex>
          </Container>
        );
      case "/pokedex":
        return (
          <Container>
            <ButtonPokemon>
              <button onClick={() => goToHomePage(navigate)}>
              &lsaquo; All Pokemons
              </button>
            </ButtonPokemon>
          </Container>
        );
      case `/detail/${params.pokemonName}`:
        return (
          <Container>
            <ButtonPokemon>
              <button onClick={() => goToHomePage(navigate)}>
                All Pokemons
              </button>
            </ButtonPokemon>
            <ButtonAdd>
              <button onClick={()=> handleAdd(pokemon)}>Add To Pokedex</button>
            </ButtonAdd>
            {pokedex.map(poke =>poke.id === pokemon.id? <ButtonDelet>
              <button onClick={()=> handleDelet(pokemon)}>Delete from Pokedex</button>
            </ButtonDelet>: <ButtonAdd>
              <button onClick={()=> handleAdd(pokemon)}>Add To Pokedex</button>
            </ButtonAdd>)}
          </Container>
        );
    }
  };
  return (
    <Container>
      {renderHeader()}
      <ModalCard />
    </Container>
  );
};

export default Header;
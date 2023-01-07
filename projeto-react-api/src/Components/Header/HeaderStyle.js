import styled from "styled-components";
import pokemonTitle from "../../img/Pokemon.png";

export const Container = styled.div`
  display: flex;
  height: 18vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: url(${pokemonTitle});
  background-repeat: no-repeat;
  background-position: 50%;
  img {
    width: 307px;
    height: 113px;
  }
`;

export const ButtonPokemon = styled.div`
  button {
    border: none;
    font-size: "Poppins";
    font-weight: 700;
    background: none;
    color: black;
    text-decoration: underline;
    font-size: 1.35rem;
  }
  position: absolute;
  left: 7vw;
`;

export const ButtonPokedex = styled.div`
  position: absolute;
  right: 2vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 18vw;
    height: 8vh;
    background-color: #33a4f8;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 655;
    color: #fff;
    font-size: 2rem;
    border: none;
  
  }
`;

export const ButtonDelet = styled.div`
  position: absolute;
  right: 2vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 12vw;
    height: 6vh;
    background-color: #FF6262;
    border-radius: 10px;
    font-family: 'poppins', sans-serif;
    color: #fff;
    border: none;
  }
`;

export const ButtonAdd = styled.div`
  position: absolute;
  right: 2vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 12vw;
    height: 6vh;
    background-color: #33a4f8;
    border-radius: 10px;
    font-family: 'poppins', sans-serif;
    color: #fff;
    border: none;
  }
`;
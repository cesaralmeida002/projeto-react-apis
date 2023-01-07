import styled from "styled-components";

export const Container = styled.div`
  background-repeat: no-repeat;
  background-position: right;
  min-width: 30vw;
  min-height: 18vh;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  margin-top: 3vh;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
  div {
    margin-top: 2vh;
    margin-bottom: 1.5vh;
  }
`;
export const Pokemon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Type = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const ImgPokemon = styled.img`
  width: 170px;
  height: 180px;
  position: relative;
  right: 240px;
  left: 4px;
  bottom: 70px;
`;

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
`;

export const ButtonPokedex = styled.button`
  min-width: 8vw;
  height: 4vh;
  background-color: #ff6262;
  color: white;
  border-radius: 8px;
  padding: 4px 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  cursor: pointer;
`;

export const ButtonPokemon = styled.button`
  min-width: 8vw;
  font-weight: bold;
  height: 4vh;
  color: black;
  background-color: #fff;
  border-radius: 10px;
  padding: 4px 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  cursor: pointer;
`;

export const CardType = styled.img`
  width: 40%;
  height: 34px;
`;
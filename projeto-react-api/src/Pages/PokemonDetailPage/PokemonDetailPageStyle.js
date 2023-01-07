import styled from "styled-components";
//import pokebola from "../../img/pokebola-background.png";

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  background-color: #5e5e5e;
  h1 {
    color: white;
    font-size: 2.9rem;
    font-weight: bold;
    margin-left: 5vw;
    padding-top: 5vh;
    margin-bottom: 5vh;
  }
`;

export const CardDetails = styled.div`
  width: 82vw;
  height: 80vh;
  margin: 0 auto;
  background-color: #729f92;
  border-radius: 38.000px;
  
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
`;

export const ContainerLeft = styled.div`
  display: flex;
`;

export const ImageLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 2vw;
  margin-bottom: 5vh;
  margin-top: 5vh;
  img {
    border-radius: 10px;
    background-color: white;
    width: 110%;
    height: 250px;
  }
`;

export const BaseStats = styled.div`
  background-color: white;
  width: 50%;
  height: auto;
  border-radius: 10px;
  margin-left: 2vw;
  margin-bottom: 5vh;
  margin-top: 5vh;
  h2 {
    color: black;
    margin: 20px 0px 0px 20px;
    font-size: 2rem;
  }
`;

export const DivStats = styled.div`
  display: flex;
  margin-left: 2vw;
  margin-top: 2vh;
  gap: 30px;
  h3 {
    border-bottom: 1px solid black;
    margin-top: 10px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
`;

export const DivInfos = styled.div`
  margin-top: 2vh;
  margin-left: 5vw;
`;

export const DivMoves = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 15vw;
  height: 51.3vh;
  margin-top: 4vh;
  h2 {
    font-weight: bold;
    padding-top: 0.5em;
    margin-left: 20px;
    margin-top: 30px;
  }
  h3 {
    margin-left: 2vw;
    margin-top: 2vh;
    border: 1px dashed rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    width: 80%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

  }
`;

export const DivType = styled.div`
  color: white;
  font-size: 2rem;
`;

export const DivTypes = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImgPokemon = styled.img`
  width: 250px;
  height: 250px;
  position: relative;
  right: 240px;
  left: 25px;
  bottom: 70px;
`;
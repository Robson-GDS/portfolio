import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #000;
  
`

export const HeroContent = styled.div`
  max-width: 1097px;
  padding: 0 3rem;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;  
    color: #A9A9A9;
    margin-top: 50px;
  }

  p {
    font-size: 2rem;
    color: #363636;
    margin-top: 20px;
  }
`

export const ImgPerfil = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 5px solid #363636;
`
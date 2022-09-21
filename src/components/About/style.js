import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #f9f9f9;
`

export const AboutContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  margin: 0 auto;

  > h1 {
    text-align: center;
    padding: 40px 0;
    font-size: 4rem;

    @media (max-width: 1180px) {
    font-size: 40px;
    }
  }
`

export const AboutCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const AboutCard = styled.div`
  max-width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 40px;
  font-size: 1.3rem;
  align-items: center;
  flex-direction: initial;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.3s all ease-in-out;

  @media (max-width: 800px) {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.02);

    @media (max-width: 800px) {
      transform: none;
    }
  }

  p {
    font-size: 1.5rem;
    color: #363636;
    line-height: 1.5;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.6;
    padding-bottom: 20px;

    span {
      font-weight: bold;
      color: #808080;
    }
  }
`
import styled from "styled-components";

export const ProjectContainer = styled.div`
  background: #000;
`

export const ProjectContent = styled.div`
  max-width: 1097px;
  margin: 0 auto;

  @media (max-width: 1180px) {
    padding: 0 2rem;
  }

  @media (max-width: 600px) {
    padding: 0 5rem;
  }

  @media (max-width: 500px) {
    padding: 0 4rem;
  }
`

export const ProjectSection = styled.h1`
  color: #fff;
  text-align: center;
  padding: 40px 0;
  font-size: 4rem;

  @media (max-width: 1180px) {
    font-size: 40px;
  }
`

export const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-bottom: 100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ProjectTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  padding-bottom: 20px;

  @media (max-width: 1180px) {
    font-size: 15px;
    padding-bottom: 10px;
  }
`

export const ProjectImg = styled.img`
  height: 320px;
  max-width: 320px;
  border-radius: 5px;

  @media (max-width: 1180px) {
    height: 300px;
    max-width: 100%;
  }
`

export const ProjectTecnologies = styled.p`
  text-align: center;
  font-size: 17px;
  padding-top: 10px;
`

export const ProjectList = styled.div`
  max-width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 1.3rem;
  align-items: center;
  transition: 0.3s all ease-in-out;

  @media (max-width: 1180px) {
    padding: 10px;
  }

  &:hover {
    transform: scale(1.02);

    @media (max-width: 1180px) {
      transform: none;
    }
  }
`

export const PreviewButton = styled.a`
  display: block;
  background-color: #01bf71;
  text-decoration: none;
  width: 100%;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  color: #fff;
  border: none;
  font-size: 16px;
  text-align: center;
  transition: all ease .3s;

  &:hover {
    opacity: .8;
  }
`
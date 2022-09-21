import perfilImg from "../../assets/perfil3.jpg"

import {
  HeroContainer,
  HeroContent,
  ImgPerfil,
} from "./style";

export function HeroSection() {
  return (
    <HeroContainer id="/">
      <HeroContent>
        <ImgPerfil src={perfilImg} />
        <h1>Robson Gomes</h1>
        <p>Front-end Developer</p>
      </HeroContent>
    </HeroContainer>
  )
}
import {
   AboutContainer, 
   AboutContent, 
   AboutCard, 
   AboutCardContainer 
} from "./style";

export function About() {
  return (
    <AboutContainer id="about">
      <AboutContent>
       <h1>Sobre</h1>
       <AboutCardContainer>
          <AboutCard>
            <p>
              Sou desenvolvedor de software front-end com sólidos conhecimentos em React, gosto de trabalhar em equipe e tenho muita vontade de aprender.
            </p>
          </AboutCard>
          <AboutCard>
            <h1>Nome: <br/><span>Robson G. Santos</span></h1>
            <h1>idade: <br/> <span>32 anos</span></h1>
            <h1>Localização:<br/> <span>São Paulo, Brazil</span> </h1>
          </AboutCard>
       </AboutCardContainer>
      </AboutContent>
    </AboutContainer>
  )
}
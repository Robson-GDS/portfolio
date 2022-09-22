import {
  ProjectContainer,
  ProjectContent,
  ProjectImg,
  ProjectTecnologies,
  ProjectTitle,
  ProjectList,
  ProjectSection,
  ProjectListContainer,
  PreviewButton
} from './style'

export function Project() {
  return (
    <ProjectContainer id="project">
      <ProjectContent>
        <ProjectSection>Projetos</ProjectSection>
        <ProjectListContainer>
          <ProjectList>
            <ProjectTitle>DT money</ProjectTitle>
            <ProjectImg src="https://raw.githubusercontent.com/Robson-GDS/DTmoney/main/src/assets/forReadme/tela2.png"/>
            <ProjectTecnologies>React, Typescript, Styled Components</ProjectTecnologies>
            <PreviewButton href='https://github.com/Robson-GDS/DTmoney' target="_blank">Preview</PreviewButton>
          </ProjectList>
          <ProjectList>
            <ProjectTitle>Event-platform</ProjectTitle>
            <ProjectImg src="https://raw.githubusercontent.com/Robson-GDS/event-platform/main/src/assets/github/readmeGif.gif"/>
            <ProjectTecnologies>React, TailwindCSS, GraphCMS</ProjectTecnologies>
            <PreviewButton href='https://github.com/Robson-GDS/event-platform' target="_blank">Preview</PreviewButton>
          </ProjectList>
          <ProjectList>
            <ProjectTitle>move.it</ProjectTitle>
            <ProjectImg src="https://raw.githubusercontent.com/Robson-GDS/moveit/main/public/forReadme/moveit_img1.png"/>
            <ProjectTecnologies>Next.js, Typescript</ProjectTecnologies>
            <PreviewButton href='https://github.com/Robson-GDS/moveit' target="_blank">Preview</PreviewButton>
          </ProjectList>
        </ProjectListContainer>
      </ProjectContent>
    </ProjectContainer>
  )
}
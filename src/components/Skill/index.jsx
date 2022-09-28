import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
   Container,
   Content,
   SkillTitle
} from './style'

export function Skill() {
  return (
    <Container>
      <SkillTitle>Skill</SkillTitle>
      <Content>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaNodeJs />
      </Content>
    </Container>
  )
}
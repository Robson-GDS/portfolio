import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
`

export const Content = styled.div`
  max-width: 1097px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  padding: 0 0 2.5rem 10rem;
  font-size: 8rem;
`

export const SkillTitle = styled.h1`
  text-align: center;
  padding: 40px 0;
  font-size: 4rem;

  @media (max-width: 1180px) {
    font-size: 40px;
  }
`
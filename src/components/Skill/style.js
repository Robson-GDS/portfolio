import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
`

export const Content = styled.div`
  max-width: 1097px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
  padding: 0 3rem 8rem;
  font-size: 8rem;

  > svg {
    border: 2px solid #01bf71;
    padding: 1rem;
    color: #01bf71;
    font-size: 10rem;
    border-radius: 4px;
  }
`

export const SkillTitle = styled.h1`
  text-align: center;
  padding: 40px 0;
  font-size: 4rem;

  @media (max-width: 1180px) {
    font-size: 40px;
  }
`
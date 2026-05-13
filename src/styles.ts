import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #121214;
  color: #e1e1e6;
`;

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 16px;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 32px;

  main {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
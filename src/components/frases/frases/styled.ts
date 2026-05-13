import styled from "styled-components";

export const Content = styled.div`
  margin-top: 24px;

  p {
    color: #c4c4cc;
    line-height: 1.6;
    margin-top: 16px;
  }
`;


export const Tags = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  a {
    color: #00b37e;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: #00875f;
    }
  }
`;
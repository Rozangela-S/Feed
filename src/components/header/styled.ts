import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  time {
    color: #8d8d99;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

`

export const Profile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Image = styled.div`
 width: 56px;
  height: 56px;
  border-radius: 8px;
  padding: 4px;

  background: #202024;
  border: 2px solid #00b37e;

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

   strong {
    display: block;
    color: #e1e1e6;
    font-size: 16px;
    line-height: 1.6;
  }

  span {
    display: block;
    color: #8d8d99;
    font-size: 14px;
  }
`
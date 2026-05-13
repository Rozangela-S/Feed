import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  width: 1100px;
`

export const Profile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #00B37E;
  display: flex;
  align-items: center;
  justify-content: center;

  >img {
    width: 75px;
    height: 75px;
    border-radius: 4px ;


  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
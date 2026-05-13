import styled from "styled-components";

export const Container = styled.div`
  display: flex ;
  flex-direction: column;
  gap: 20px;
  padding: 16px;

  >div {
    display: flex;
    gap: 20px;
  }

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
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  background-color: #29292E;
  padding: 16px;

`
export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

`

export const HeaderProfile = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  >div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    
    >time {
      font-size: 12px;
      color: #8D8D99;
    }
  }

  >button{
    background-color: transparent;
    border: none;

    &:focus{
      outline: none;
    }

  }

`

export const ContainerButton = styled.div`
  margin-left: 90px;

   >button {
      background-color: transparent;
      width: fit-content;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 4px;

      &:focus {
        outline: none;
      }
    }
    >span {
      font-size: 14px;
    }

`
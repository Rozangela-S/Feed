import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 280px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #202024;
  margin-top: 10px;
`

export const Img = styled.img`
  width: 256px;
  height: 72px;
  border-radius-top: 8px;

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

`

export const ImgProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-top: -40px;
`

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  gap: px;
  align-items: center;
  justify-content: Center;
  margin-bottom: 10px;

  >h3 {
    font-size: 16px;
    font-weight: 700;
    font-style: bold;
    line-height: 14px;
    color: #E1E1E6;
  }

  >p {
    font-size: 14px;
    font-weight: 400;
    font-style: regular;
    line-height: 160%;
    text-align: middlie;
    color: #8D8D99;
  }
`

export const Line = styled.span`
  width: 256px;
  border-bottom: 1px solid #323238;
`

export const ButtonContainer = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #00B37E;
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 10px;
  background-color: transparent;
  gap: 10px;

  font-size: 16px;
  color: #00B37E;
  font-weight: 700;
`
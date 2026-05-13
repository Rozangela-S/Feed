import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > textarea {
    padding: 10px 6px 10px 6px;
    height: 96px;
    border-radius: 8px;
    border: 1px solid #00B37E;
    background: #121214;

    &:focus {
      border: 1px solid #00B37E;
      outline: none;
    }
  }

  >button {
    width: 108px;
    height: 49px;
    border-radius: 8px;
    padding: 16px 24px 14px 24px;
    gap: 14px;
    background-color: #00875F;
    transition: all 0.2s;

    &:hover {
      background-color: #00875e9c;
      border: 1px solid #fff
    }
  }

`
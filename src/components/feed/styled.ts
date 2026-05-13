import styled from "styled-components";

export const Container = styled.form`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #323238;

  display: flex;
  flex-direction: column;
  gap: 16px;

  strong {
    color: #e1e1e6;
    font-size: 16px;
  }

  textarea {
    width: 100%;
    height: 96px;
    resize: none;

    background: #121214;
    border: 0;
    border-radius: 8px;

    color: #e1e1e6;
    padding: 16px;

    line-height: 1.4;

    &::placeholder {
      color: #7c7c8a;
    }

    &:focus {
      outline: 1px solid #00b37e;
    }
  }

  footer {
    visibility: hidden;
    max-height: 0;
  }

  &:focus-within footer {
    visibility: visible;
    max-height: none;
  }

  button {
    width: 108px;
    height: 49px;

    border: 0;
    border-radius: 8px;

    background: #00875f;
    color: #ffffff;

    font-weight: 700;
    cursor: pointer;

    transition: background 0.2s;

    &:hover {
      background: #00b37e;
    }
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;

  display: flex;
  gap: 16px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const MessageBox = styled.div`
  background: #29292e;
  border-radius: 8px;
  padding: 16px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      display: block;
      color: #e1e1e6;
      font-size: 14px;
      line-height: 1.6;
    }

    time {
      display: block;
      color: #8d8d99;
      font-size: 12px;
      line-height: 1.6;
    }

    button {
      background: transparent;
      border: 0;
      color: #8d8d99;
      cursor: pointer;

      line-height: 0;
      border-radius: 4px;

      &:hover {
        color: #f75a68;
      }

      &:focus {
        outline: 1px solid #00b37e;
      }
    }
  }

  p {
    margin-top: 16px;
    color: #c4c4cc;
    line-height: 1.6;
    font-size: 14px;
  }
`;

export const LikeButton = styled.button`
  margin-top: 16px;

  background: transparent;
  border: 0;

  color: #8d8d99;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  span::before {
    content: "\\2022";
    padding-right: 8px;
  }

  &:hover {
    color: #00b37e;
  }

  &:focus {
    outline: none;
  }
`;
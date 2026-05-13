import styled from "styled-components";

export const Container = styled.aside`
  background: #202024;
  border-radius: 8px;
  overflow: hidden;
`;

export const Cover = styled.div`
  width: 100%;
  height: 72px;
  background: url("https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400")
    center/cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -32px;
  padding-bottom: 24px;

  strong {
    margin-top: 16px;
    color: #e1e1e6;
    font-size: 16px;
    line-height: 1.6;
  }

  span {
    color: #8d8d99;
    font-size: 14px;
  }
`;

export const Avatar = styled.div`
  width: 64px;
  height: 64px;
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

export const EditButton = styled.button`
  width: calc(100% - 48px);
  margin: 0 24px 24px;
  height: 50px;

  border-radius: 8px;
  border: 1px solid #00b37e;
  background: transparent;

  color: #00b37e;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #00b37e;
    color: #ffffff;
  }
`;
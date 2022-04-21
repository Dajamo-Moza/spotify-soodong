import styled from "styled-components";

export const Wrapper = styled.div`
  width: 25em;
  height: 30em;
  left: 40vw;
  top: 20vh;
  position: fixed;
  background-color: #3a3a3a;
  color: #02c567;
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.button`
  color: #02c567;
  font-size: 24px;
  position: absolute;
  right: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 15px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-top: 20px;
  font-weight: 700;
`;

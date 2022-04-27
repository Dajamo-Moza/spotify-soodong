import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 89vw;
  height: 100%;
  background-color: black;
  opacity: 70%;
  top: 0px;
  left: 0px;
  padding-left: 10vw;
  padding-top: 250px;
`;

export const CloseButton = styled.button`
  color: white;
  font-size: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 15px;
  &:hover {
    transform: scale(1.4);
    transition: all 0.3s linear;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: white;
`;

export const ContentInput = styled.input`
  font-weight: 700;
  font-size: 100px;
  width: 800px;
  background-color: transparent;
  border: none;
  border-bottom: 10px solid white;
  color: white;
  margin-left: 400px;
  &:focus {
    outline: none;
  }
`;

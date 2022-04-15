import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 170px;
  border-left: 1px solid black;
  padding-left: 20px;
  padding-right: 60px;
`;

export const Menu = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 60px;
  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

export const SearchInput = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
`;

export const Button = styled.button`
  width: 40px;
  height: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  padding: 0px 30px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding-bottom: 13px;
`;

export const Content = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin-left: 37px;
`;

export const Rank = styled.p`
  font-size: 80px;
  font-weight: 700;
  width: 120px;
`;

export const Description = styled.div`
  width: 557px;
  height: 99px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Artist = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 40px;
  height: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

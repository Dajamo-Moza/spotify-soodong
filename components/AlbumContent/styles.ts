import styled from "styled-components";

export const Wrapper = styled.div<{ isClicked: boolean }>`
  display: flex;
  border-bottom: 1px solid black;
  margin-left: 37px;
  width: ${(props) => (props.isClicked ? "1000px" : "")};
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

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const SelectedAlbumWrapper = styled.div`
  display: flex;
  padding: 40px;
`;

export const TracksWrapper = styled.div`
  width: 900px;
  max-height: 530px;
  padding: 40px;
  overflow-y: scroll;
  margin: 10px 0px;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

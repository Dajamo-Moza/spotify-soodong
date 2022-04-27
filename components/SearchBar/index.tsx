import React from "react";
import useStore from "../../store";
import { CloseButton, ContentInput, Title, Wrapper } from "./styles";

const SearchBar = () => {
  const setShowSearchBar = useStore((state) => state.setShowSearchBar);

  const onClickSearchBar = () => {
    setShowSearchBar(false);
  };

  return (
    <Wrapper>
      <CloseButton onClick={onClickSearchBar}>✕</CloseButton>
      <Title>Looking for ...</Title>
      <ContentInput />
    </Wrapper>
  );
};

export default SearchBar;

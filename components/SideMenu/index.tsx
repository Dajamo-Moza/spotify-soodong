import React from "react";
import {
  Button,
  Menu,
  MenuWrapper,
  SearchInput,
  SearchWrapper,
} from "./styles";

const SideMenu = () => {
  return (
    <MenuWrapper>
      <Menu>SIGN OUT</Menu>
      <Menu>RECOMMENDATIONS</Menu>
      <SearchWrapper>
        <SearchInput type="text" />
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
      </SearchWrapper>
    </MenuWrapper>
  );
};

export default SideMenu;

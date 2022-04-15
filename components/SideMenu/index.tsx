import React from "react";
import Search from "../Search";
import { Wrapper, Menu } from "./styles";

const SideMenu = () => {
  return (
    <Wrapper>
      <Menu>SIGN OUT</Menu>
      <Menu>RECOMMENDATIONS</Menu>
      <Search />
    </Wrapper>
  );
};

export default SideMenu;

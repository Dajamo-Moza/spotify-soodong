import React from "react";
import { Wrapper } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;

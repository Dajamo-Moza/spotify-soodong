import React from "react";
import { Wrapper } from "./styles";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IProps) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Button;

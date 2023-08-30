import { REQUEST_INFO } from "config";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <SHeaderLayout>
      {REQUEST_INFO.RepoName.toUpperCase()} /{" "}
      {REQUEST_INFO.OwnerName.toUpperCase()}
    </SHeaderLayout>
  );
};
const SHeaderLayout = styled.header`
  font-size: 30px;
  width: 100%;
  text-align: center;
`;
export default Header;

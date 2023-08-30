import GlobalStyle from "GlobalStyle";
import Header from "components/common/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import SLayout from "styles/SLayout";
import "normalize.css";
function App() {
  return (
    <SLayout>
      <GlobalStyle />
      <Header />
      <Outlet />
    </SLayout>
  );
}

export default App;

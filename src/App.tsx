import GlobalStyle from "GlobalStyle";
import React from "react";
import { Outlet } from "react-router-dom";
import SLayout from "styles/SLayout";

function App() {
  return (
    <SLayout>
      <GlobalStyle />
      <Outlet />
    </SLayout>
  );
}

export default App;

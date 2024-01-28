import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { StyledMain } from "./styles";

function Root() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
}

export { Root };

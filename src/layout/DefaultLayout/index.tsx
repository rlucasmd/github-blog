import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./styles";

function DefaultLayout(){
  return (
    <DefaultLayoutContainer>
      
      <Outlet />
    </DefaultLayoutContainer>
  );
}

export { DefaultLayout };
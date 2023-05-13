import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./styles";
import { Header } from "../../components/Header";

function DefaultLayout(){
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
}

export { DefaultLayout };
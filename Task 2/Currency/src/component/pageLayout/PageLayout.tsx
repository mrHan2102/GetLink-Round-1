import { Outlet } from "react-router-dom";
import { Wrapper } from "./PageLayoutStyled";
import {Header, Footer} from "@/component/index"

const PageLayout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer/>
    </>
  );
};

export default PageLayout;

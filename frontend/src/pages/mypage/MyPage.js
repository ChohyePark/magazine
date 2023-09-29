import styled from "styled-components";
import Sidebar from "../../components/mypage/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideBox = styled.div`
  flex: 0.2;
`;

const OutletBox = styled.div`
  flex: 1;
`;

export default function () {
  return (
    <Container>
      <SideBox>
        <div className="d-none d-md-block">
          <Sidebar></Sidebar>
        </div>
      </SideBox>
      <OutletBox>
        <div className="co1-12 col-md-10 start">
          <Outlet></Outlet>
        </div>
      </OutletBox>
    </Container>
  );
}

import styled from "styled-components";
import { UserIcon, GuestIcon } from "./Icon";
import { useSelector } from "react-redux";
import Navi from "./Navi";
import logo from "../../../assets/logo/logo.png";

const Header = styled.div`
  height: 118px;
  display: flex;
  position: sticky;
  z-index: 50;
  top: 0;
  margin: 0;
  background-color: white;
`;

const LogoBox = styled.div`
  margin: auto;
  width: 110px;
  height: 110px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export default function () {
  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <Header>
      <LogoBox
        className="col-6 col-md-2 mt-2 logo_box"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={logo} className="d-none d-md-block" />
      </LogoBox>
      <div className="d-none d-md-block col-md-8">
        <Navi></Navi>
      </div>
      <div className="col-6 col-sm-none col-md-2">
        {user.isLogin ? <UserIcon user={user}></UserIcon> : <GuestIcon />}
      </div>
    </Header>
  );
}

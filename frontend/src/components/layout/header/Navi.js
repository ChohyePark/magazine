import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  margin-top: 2.4rem;
`;

const NavItem = styled.li`
  &:hover div {
    opacity: 100;
  }
`;

const Circle = styled.div`
  position: absolute;
  margin-top: 5px;
  margin-left: ${(props) => props.$marginleft};
  z-index: 30;
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
  opacity: 0;
  transition-duration: 1s;
`;

function Navi() {
  return (
    <Nav className="navbar d-none d-md-block navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem className="nav-item">
              <Circle $marginleft={"120px"}></Circle>
              <Link to="/" className="nav-link active" aria-current="page">
                Magazine Story{" "}
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Circle $marginleft={"73px"}></Circle>
              <Link to="/posts" className="nav-link active">
                Contents
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default Navi;

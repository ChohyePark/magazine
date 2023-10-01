import styled from "styled-components";
import { Link } from "react-router-dom";

const IconWrapper = styled.div`
  margin-top: 30px;
  height: 42px;
`;

const IconBox = styled.div`
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  flex: 1;
  color: black;
`;

const IconText = styled.span`
  margin-left: 6px;
  font-size: 0.76em;
`;

const SearchIconWrapper = styled.div`
  text-align: center;
  color: black;
  padding-top: 15px;
  margin-left: 80px;
  font-size: 28px;
  i {
    color: black;
  }
`;

function GuestIcon() {
  return (
    <>
      <IconWrapper className="d-none d-sm-block">
        <IconBox>
          <Link to="/login">
            <Icon>
              <i className="ri-user-6-line"></i>
              <IconText>Login</IconText>
            </Icon>
          </Link>
          <Link to="/join">
            <Icon>
              <i className="ri-user-add-fill"></i>
              <IconText>Join</IconText>
            </Icon>
          </Link>
        </IconBox>
      </IconWrapper>
      <SearchIconWrapper className="d-block d-sm-none">
        <Link to="/search">
          <i className="ri-search-2-line" />
        </Link>
      </SearchIconWrapper>
    </>
  );
}

function UserIcon({ user }) {
  return (
    <>
      <IconWrapper className="d-none d-sm-block">
        <IconBox>
          <Link to="/mypage/info">
            <Icon>
              <i className="ri-hearts-fill" />
              <IconText>Mypage</IconText>
            </Icon>
          </Link>
          {user.vendor === "google" ? (
            <Link
              to="https://accounts.google.com/Logout"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("user");
              }}
            >
              <Icon>
                <i className="ri-user-4-line" />
                <IconText>Logout</IconText>
              </Icon>
            </Link>
          ) : (
            <Link
              to="http://localhost:8080/logout"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("user");
              }}
            >
              <Icon>
                <i className="ri-user-4-line" />
                <IconText>Logout</IconText>
              </Icon>
            </Link>
          )}
        </IconBox>
      </IconWrapper>
      <SearchIconWrapper className="d-block d-sm-none">
        <Link to="/search">
          <i className="ri-search-2-line" />
        </Link>
      </SearchIconWrapper>
    </>
  );
}

export { UserIcon, GuestIcon };

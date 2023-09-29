import logo from "../../assets/logo/footer_logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterMdWrapper = styled.div`
  display: flex;
  background-color: black;
  color: #fff;
`;

const FooterRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const FooterContent = styled.div`
  font-size: ${(props) => props.$fontSize};
`;

const FooterLogoBox = styled.div`
  margin-top: 1rem;
  margin-left: 17rem;
  width: 5rem;
  height: 5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const FooterSmallWrapper = styled.div`
  background-color: black;
  height: 4.3rem;
  color: #fff;
  text-align: center;
  padding-top: 0.4rem;
`;

const FooterIcon = styled.i`
  font-size: 1.4rem;
  color: #fff;
`;

const FooterText = styled.span`
  font-size: 1px;
  color: #fff;
  display: block;
`;

function Footer({ user }) {
  const UserFooter = () => {
    return (
      <FooterSmallWrapper className="fixed-bottom d-md-none">
        <div className="row">
          <div className="col-3">
            <Link to="/">
              <FooterIcon className="ri-home-heart-line"></FooterIcon>
              <FooterText>Home</FooterText>
            </Link>
          </div>
          <div className="col-3">
            <Link to="mypage/info">
              <FooterIcon className="ri-user-line"></FooterIcon>
              <FooterText>Mypage</FooterText>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/posts">
              <FooterIcon className="ri-book-read-line"></FooterIcon>
              <FooterText>Contents</FooterText>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/newpost">
              <FooterIcon className="ri-quill-pen-line"></FooterIcon>
              <FooterText>Write</FooterText>
            </Link>
          </div>
        </div>
      </FooterSmallWrapper>
    );
  };

  const GuestFooter = () => {
    return (
      <FooterSmallWrapper className="container-flud fixed-bottom d-md-none">
        <FooterRow>
          <div className="col-4">
            <Link to="/">
              <FooterIcon className="ri-home-heart-line"></FooterIcon>
              <FooterText>Home</FooterText>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/login">
              <FooterIcon className="ri-login-box-line"></FooterIcon>
              <FooterText>Login</FooterText>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/posts">
              <FooterIcon className="ri-book-read-line"></FooterIcon>
              <FooterText>Contents</FooterText>
            </Link>
          </div>
        </FooterRow>
      </FooterSmallWrapper>
    );
  };

  return (
    <>
      <FooterMdWrapper className="d-none d-md-block">
        <FooterRow>
          <div className="col-4">
            <ul className="mt-4">
              <li>
                <h4>Bang-Guseog</h4>
              </li>
              <FooterContent $fontSize={"9px"}>BGS INC.</FooterContent>
              <FooterContent $fontSize={"9px"}>Seoul Republic of Korea | 070 5878 2939 | info@bgsmag.com</FooterContent>
            </ul>
          </div>
          <div className="col-4"></div>
          <div className="col-4 d-flex justify-content-center footer-r">
            <FooterLogoBox>
              <img src={logo}></img>
            </FooterLogoBox>
          </div>
        </FooterRow>
        <FooterRow>
          <FooterContent $fontSize={"0.7rem"} className="col-12 d-flex justify-content-center mb-4">
            COPYRIGHT © BangGuseog ALL RIGHTS RESERVED / SITE BY 42KH
          </FooterContent>
        </FooterRow>
      </FooterMdWrapper>
      {user ? <UserFooter></UserFooter> : <GuestFooter></GuestFooter>}
    </>
  );
}

export default Footer;

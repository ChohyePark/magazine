import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import google from "../assets/icon/google_icon.png";
import naver from "../assets/icon/naver_icon.png";
import logo from "../assets/logo/logo.png";
import Container from "../components/shared/Container";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  margin: auto;
`;

const LoginTitle = styled.span`
  width: 90%;
  border-bottom: 0.2px solid black;
  margin-top: 30px;
  font-size: 32px;
  display: flex;
  justify-content: center;
`;

const InfoTitle = styled.p`
  margin: 10px 0 8px 0;
  font-size: 14px;
`;

const LoginInput = styled.input`
  padding-left: 10px;
  width: 380px;
  height: 40px;
  border: 1px solid black;
  border-radius: 3px;
`;

const ButtonBox = styled.div`
  margin-top: 50px;
`;

const Button = styled.div`
  text-align: center;
  border: 1px solid black;
  background-color: black;
  color: #ffff;
  border-radius: 7px;
  width: 120px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #ffff;
    color: black;
  }
`;

const SocialLoginBox = styled.div`
  height: 100px;
  text-align: center;
  margin-top: 1.8rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.div`
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: 20px;
  margin-top: 40px;
  overflow: hidden;
  img {
    width: 90%;
    height: 90%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default function () {
  return (
    <Container height={"640px"}>
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
        <hr></hr>
        <div>
          <InfoTitle>아이디</InfoTitle>
          <LoginInput type="text" placeholder="아이디를 입력해주세요" readOnly></LoginInput>
        </div>
        <div>
          <InfoTitle>비밀번호</InfoTitle>
          <LoginInput type="text" placeholder="비밀번호를 입력해주세요" readOnly></LoginInput>
        </div>
        <ButtonBox>
          <Button>로그인</Button>
        </ButtonBox>
        <SocialLoginBox>
          <a href="http://localhost:8080/oauth2/authorization/google">
            <SocialIcon>
              <img src={google}></img>
            </SocialIcon>
          </a>
          <SocialIcon>
            <img src={logo} />
          </SocialIcon>
          <a href="http://localhost:8080/oauth2/authorization/naver">
            <SocialIcon>
              <img src={naver} />
            </SocialIcon>
          </a>
        </SocialLoginBox>
      </LoginBox>
    </Container>
  );
}

import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import styled from "styled-components";

const Logo = styled.div`
  width: 19rem;
  height: 19rem;
  margin: auto;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h3`
  margin: 20px 0 0 10px;
`;

const GuideText = styled.span`
  font-size: 13px;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;

export default function () {
  return (
    <Container height={"600px"}>
      <Logo>
        <img src={logo} />
      </Logo>
      <Guide>
        <Title>원하시는 페이지를 찾을 수 없습니다.</Title>
        <GuideText>
          찾으려는 페이지의 주소가 잘못 되었거나
          <br />
          주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
          <br />
          입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요
        </GuideText>
        <ButtonBox>
          <Link to="/">
            <Button width={"200px"} height={"40px"}>
              방구석 매거진 홈 가기
            </Button>
          </Link>
        </ButtonBox>
      </Guide>
    </Container>
  );
}

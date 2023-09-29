import Container from "../components/shared/Container";
import styled from "styled-components";

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dfdfdf;
  width: 400px;
  height: 500px;
  margin: auto;
  border-radius: 10%;
`;

const JoinTitle = styled.div`
  margin-top: 80px;
  font-size: 28px;
`;

const JoinText = styled.p`
  margin-top: 30px;
  font-size: 18px;
`;

const Icon = styled.i`
  margin: 82px 20px 0 0;
  color: black;
  text-decoration: none;
  font-size: 18px;
`;

export default function () {
  return (
    <Container height={"640px"}>
      <JoinBox>
        <JoinTitle>회원가입</JoinTitle>
        <hr></hr>
        <JoinText>
          <Icon className="ri-mail-send-line" />
          이메일 인증으로 가입
        </JoinText>
        <JoinText>
          <Icon className="ri-smartphone-line" />
          핸드폰 인증으로 가입
        </JoinText>
      </JoinBox>
    </Container>
  );
}

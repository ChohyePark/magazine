import Form from "../../components/mypage/Form";
import styled from "styled-components";
import Title from "../../components/mypage/Title";
import Button from "../../components/shared/Button";
import { useSelector } from "react-redux";

const TextFont = styled.h3`
  font-family: "S-CoreDream-6Bold";
`;
const Guide = styled.span`
  font-size: 12px;
  color: #303033;
`;
const IdBox = styled.div`
  margin-top: 20px;
`;

const PasswordBox = styled.div`
  margin-top: 12px;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 22px;
`;

const PasswordInput = styled.input`
  height: 32px;
  font-size: 11px;
  width: 300px;
`;

const UserInfoTitle = styled.div`
  width: 70px;
  height: 30px;
  margin-right: 20px;
  float: left;
`;

const UserInfo = styled.div`
  width: 60%;
  height: 30px;
  font-weight: bold;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export default function () {
  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <Form>
      <Title>
        <TextFont>비밀번호 재확인</TextFont>
        <Guide>회원님의 소중한 정보보호를 위해 비밀번호를 재확인하고 있습니다.</Guide>
      </Title>
      <IdBox>
        <UserInfoTitle>아이디</UserInfoTitle>
        <UserInfo>{user.email}</UserInfo>
      </IdBox>
      <PasswordBox>
        <UserInfoTitle>비밀번호</UserInfoTitle>
        <UserInfo>
          <PasswordInput type="text" placeholder="비밀번호를 입력해주세요" />
        </UserInfo>
      </PasswordBox>
      <ButtonBox>
        <Button>다음</Button>
      </ButtonBox>
    </Form>
  );
}

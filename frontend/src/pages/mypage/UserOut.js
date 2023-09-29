import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Form from "../../components/mypage/Form";
import Title from "../../components/mypage/Title";
import Button from "../../components/shared/Button";
import styled from "styled-components";

const Guide = styled.div`
  list-style: none;
  margin-top: 20px;
  font-size: 16px;
`;

const GuideTitle = styled.li`
  margin-bottom: 8px;
  font-size: 18px;
`;

const GuideList = styled.li`
  list-style-type: disc;
  font-size: 12px;
`;

const GuideCheck = styled.span`
  margin: 10px;
  font-size: 14px;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;
export default function () {
  const [check, setCheck] = useState(false);

  const checkedHandler = (checked, id) => {
    if (checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const onClickUserOutHandler = () => {
    if (check === false) {
      alert("약관 동의 후 회원탈퇴를 진행할 수 있습니다.");
      return;
    }
    if (window.confirm("정말 탈퇴하시겠습니까?")) {
      axios({
        url: "/api/v1/users",
        method: "delete",
      }).then((resp) => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        window.location.href = "http://localhost:8080/logout";
      });
    } else {
      return;
    }
  };

  return (
    <Form>
      <Title>
        <h3>회원탈퇴</h3>
      </Title>
      <div>
        <Guide>
          <GuideTitle>
            <strong>탈퇴 시 유의사항</strong>
          </GuideTitle>
          <GuideList>
            탈퇴 후에 회원님께서 등록한 게시물 및 댓글들은 사이트에서 모두 삭제 처리 됩니다. 탈퇴하기 전에 본인이 작성한
            게시물과 댓글들은 모두 따로 보관한 후에 탈퇴해 주시길 바랍니다.
          </GuideList>
          <GuideList>동일 아이디는 탈퇴 후 7일 간 재사용할 수 없습니다.</GuideList>
          <GuideList>탈퇴한 계정 및 이용 내역은 복구할 수 없으니 탈퇴 시 유의하시기 바랍니다.</GuideList>
          <GuideList>
            아이디(이메일), 이메일, 비밀번호는 부정 이용ㆍ탈퇴 방지를 위해 탈퇴 요청 시 7일 간 별도 보관 후 파기합니다.
          </GuideList>
        </Guide>
      </div>
      <hr></hr>
      <div>
        <input
          type="checkbox"
          className="mt-2"
          id="check"
          onChange={(e) => checkedHandler(e.target.checked, "check")}
        ></input>
        <GuideCheck>위 내용을 모두 확인했습니다 (필수)</GuideCheck>
      </div>
      <ButtonBox>
        <Button onClick={onClickUserOutHandler}>탈퇴</Button>
      </ButtonBox>
    </Form>
  );
}

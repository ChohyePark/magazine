import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = styled.div`
  height: 600px;
  margin-left: 50px;
  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;

    li {
      list-style: none;
      font-size: 16px;
      margin-top: 12px;
      color: #4f4e4e;
    }
  }
`;

const SideBarTitle = styled.strong`
  font-size: 22px;
  margin-bottom: 12px;
`;

export default function () {
  return (
    <SideBar>
      <ul>
        <li>
          <SideBarTitle>마이페이지</SideBarTitle>
        </li>
        <Link to="/mypage/info">
          <li>내 정보</li>
        </Link>
        <Link to="/mypage/reconfirm">
          <li>내 정보 수정</li>
        </Link>
        <Link to="/mypage/mycommunity">
          <li>커뮤니티</li>
        </Link>
        <Link to="/mypage/bookmark">
          <li>북마크</li>
        </Link>
        <Link to="/mypage/userout">
          <li>회원 탈퇴</li>
        </Link>
      </ul>
    </SideBar>
  );
}

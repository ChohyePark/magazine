import styled from "styled-components";
import Form from "../../components/mypage/Form";
import profile from "../../assets/logo/mypage_profile.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  float: left;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  float: left;
  margin-left: 42px;
  width: 70%;
  font-size: 15px;

  ul {
    padding: 0px;
    margin: 0px;

    li {
      margin-top: 10px;
      list-style: none;
    }
  }
`;

const UserInfoTitle = styled.div`
  width: 70px;
  height: 30px;
  float: left;
  margin-right: 30px;
`;

const UserInfo = styled.div`
  font-weight: bold;
  width: 20rem;
`;

export default function () {
  const user = useSelector((state) => {
    return state.user;
  });
  const [picture, setPicture] = useState(user.picture);
  const [createdDate, setCreatedDate] = useState(user.createdDate);

  const getPicture = () => {
    if (user.picture !== "") {
      setPicture(user.picture);
    } else {
      setPicture({ profile });
    }
  };

  const calculateDate = () => {
    let day = ["일", "월", "화", "수", "목", "금", "토"];
    let createdDate = new Date(user.createdDate);
    setCreatedDate(
      createdDate.getFullYear() +
        "년 " +
        (createdDate.getMonth() + 1) +
        "월 " +
        createdDate.getDate() +
        "일 " +
        day[createdDate.getDay()] +
        "요일"
    );
  };

  useEffect(() => {
    getPicture();
    calculateDate();
  }, [user]);

  return (
    <Form>
      <Profile>
        <img src={picture}></img>
      </Profile>
      <Info>
        <ul>
          <li>
            <strong>회원정보</strong>
          </li>
          <li>
            <UserInfoTitle>닉네임</UserInfoTitle>
            <UserInfo>{user.nickname}</UserInfo>
          </li>
          <li>
            <UserInfoTitle>이메일</UserInfoTitle>
            <UserInfo>{user.email}</UserInfo>
          </li>
          <li>
            <UserInfoTitle>가입 날짜</UserInfoTitle>
            <UserInfo>{createdDate}</UserInfo>
          </li>
        </ul>
      </Info>
    </Form>
  );
}

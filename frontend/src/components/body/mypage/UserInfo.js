import "bootstrap/dist/css/bootstrap.css";
import style from "./UserInfo.module.css";
import profile from "../../../assets/logo/mypage_profile.png";
import { useEffect, useState } from "react";

export default function ({ user, setUser }) {
  const [picture, setPicture] = useState("");
  const [createdDate, setCreatedDate] = useState();

  const getPicture = () => {
    console.log(user);
    if (user.picture !== null) {
      setPicture(user.picture);
    } else {
      setPicture({ profile });
    }
  };

  const calDate = () => {
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
    calDate();
  }, []);

  return (
    <div className="infobox" style={{ marginTop: "30px", width: " 70%", height: "500px" }}>
      <div className={style.profile}>
        <img src={picture} style={{ width: "100%", height: "100%" }}></img>
      </div>
      <div className={style.info}>
        <ul className={style.info_ul}>
          <li className={style.info_li}>
            <strong>회원정보</strong>
          </li>
          <li className={style.info_li}>
            <div className={style.l}>닉네임</div>
            <div className={style.r}>{user.nickname}</div>
          </li>
          <li className={style.info_li}>
            <div className={style.l}>이메일</div>
            <div className={style.r}>{user.email}</div>
          </li>
          <li className={style.info_li}>
            <div className={style.l}>가입 날짜</div>
            <div className={style.r}>{createdDate}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

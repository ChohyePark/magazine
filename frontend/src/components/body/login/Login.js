import { useState } from "react";
import style from "./Login.module.css";
import "bootstrap/dist/css/bootstrap.css";
import google from "../../../assets/icon/google_icon.png";
import naver from "../../../assets/icon/naver_icon.png";
import logo from "../../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

export default function () {
  const Navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({ id: "", password: "" });
  return (
    <div className={style.login_container}>
      <span className={`${style.login_title} d-flex justify-content-center`}>로그인</span>
      <hr style={{ color: "black" }}></hr>
      <div className={style.login_box}>
        <div className={style.idbox}>
          <p style={{ marginBottom: "8px", fontSize: "14px" }}>아이디</p>
          <input type="text" placeholder="아이디를 입력해주세요" readOnly className={style.login_input}></input>
        </div>
        <div className={style.pwbox}>
          <p style={{ marginBottom: "8px", fontSize: "14px" }}>비밀번호</p>
          <input type="text" placeholder="비밀번호를 입력해주세요" readOnly className={style.login_input}></input>
        </div>
        <div className={style.btn_box}>
          <button className="btn btn-dark">로그인</button>
        </div>
        <div className={`${style.social_login} d-flex justify-content-center`}>
          <a href="http://localhost:8080/oauth2/authorization/google">
            <div className={style.social_icon}>
              <img src={google}></img>
            </div>
          </a>
          <div className={style.social_icon}>
            <img src={logo} style={{ height: "93%" }}></img>
          </div>
          <a href="http://localhost:8080/oauth2/authorization/naver">
            <div className={style.social_icon}>
              <img src={naver}></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

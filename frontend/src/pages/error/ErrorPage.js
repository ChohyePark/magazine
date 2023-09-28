import style from "./ErrorPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className={`${style.container} container`}>
      <div className={style.logo_box}>
        <img src={logo} style={{ width: "100%", height: "100%" }}></img>
      </div>
      <div className={style.guide}>
        <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>원하시는 페이지를 찾을 수 없습니다.</h3>
        <span style={{ fontSize: "13px" }}>
          찾으려는 페이지의 주소가 잘못 되었거나
          <br />
          주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
          <br />
          입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요
        </span>
        <div style={{ marginTop: "20px" }}>
          <Link to="/">
            <button className="btn btn-dark" style={{ fontSize: "14px" }}>
              방구석 매거진 홈 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

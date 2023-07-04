import style from './Join.module.css';
import {Link} from 'react-router-dom';


export default function () {

  return (
    <div className={style.join_container}>
      <div>
        <span className={`${style.join_title} d-flex justify-content-center`}>회원가입</span>
        <hr></hr>
          <p className={style.join_mail} onClick={()=>{
            alert('로그인가서 바로 소셜 로그인해주세요')
          }}>
            <i className={`${style.mail_icon} ri-mail-send-line`}></i>
            이메일 인증으로 가입
          </p>
          <p className={style.join_phone} onClick={()=>{
            alert('영차 영차 기능 구현중')
          }}>
            <i className={`${style.phone_icon} ri-smartphone-line`}></i>
            핸드폰 인증으로 가입
          </p>
      </div>
    </div>
  )

}
import {useNavigate} from 'react-router-dom';
import style from './CheckPw.module.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function ({user}) {

  const Navigate = useNavigate();

  const BtnHandler = () => {
    alert('기능 구현 중 데헷 >_<')
  }

  return (
    <div style={{marginTop: "30px", height: "500px", marginLeft: "10px", width: "100%"}}>
      <div style={{borderBottom: "3px solid black", width: "960px", paddingBottom: "12px"}}>
        <h3 className={style.h}>비밀번호 재확인</h3>
        <span style={{fontSize: "12px", color: "#303033"}}>회원님의 소중한 정보보호를 위해 비밀번호를 재확인하고 있습니다.</span>
      </div>
      <div style={{marginTop: "20px"}}>
        <div className={style.l}>아이디</div>
        <div className={style.r}>{user.email}</div>
      </div>
      <div style={{marginTop: "12px", width: "960px", borderBottom: "1px solid #d4d4d4", paddingBottom: "22px"}}>
        <div className={style.l}>비밀번호</div>
        <div className={style.r}>
          <input type='text' placeholder='비밀번호를 입력해주세요'
                 style={{height: "32px", fontSize: "14px", width: "300px"}}></input>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <button className='btn btn-dark'
                style={{width: "120px"}}
                onClick={BtnHandler}>다음
        </button>
      </div>
    </div>
  )
}
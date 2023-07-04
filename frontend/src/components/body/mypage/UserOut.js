import {useState} from 'react';
import style from './UserOut.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';

export default function () {
  const [check, setCheck] = useState(false);
  const Navigate = useNavigate();

  const checkedHandler = (checked, id) => {
    if (checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }


  return (
    <div className={`${style.container} container`}>
      <div className={style.title_box}>
        <h3 className={style.h}>회원탈퇴</h3>
      </div>
      <div className={style.guide_box}>
        <ul className={style.ul}>
          <li className={style.guide}><strong>탈퇴 시 유의사항</strong></li>
          <li className={style.l}>탈퇴 후에 회원님께서 등록한 게시물 및 댓글들은 사이트에서 모두 삭제 처리 됩니다. 탈퇴하기 전에 본인이 작성한 게시물과 댓글들은 모두 따로 보관한 후에 탈퇴해 주시길 바랍니다.
          </li>
          <li className={style.l}>동일 아이디는 탈퇴 후 7일 간 재사용할 수 없습니다.</li>
          <li className={style.l}>탈퇴한 계정 및 이용 내역은 복구할 수 없으니 탈퇴 시 유의하시기 바랍니다.</li>
          <li className={style.l}>아이디(이메일), 이메일, 비밀번호는 부정 이용ㆍ탈퇴 방지를 위해 탈퇴 요청 시 7일 간 별도 보관 후 파기합니다.</li>
        </ul>
      </div>
      <hr></hr>
      <div>
        <input type='checkbox' className='mt-2' id='check'
               onChange={(e) => checkedHandler(e.target.checked, 'check')}></input>
        <span className={style.span}>위 내용을 모두 확인했습니다 (필수)</span>
      </div>
      <div className='mt-3'>
        <button className='btn btn-dark mt-2'
                style={{fontSize: "14px"}}
                onClick={() => {
                  if (check == false) {
                    alert('약관 동의 후 회원탈퇴를 진행할 수 있습니다.')
                    return;
                  }
                  if (window.confirm("정말 탈퇴하시겠습니까?")) {
                    axios({
                      url : '/api/v1/users',
                      method : 'delete'
                    }).then((resp)=> {
                      localStorage.removeItem("isLoggedIn")
                      localStorage.removeItem("user")
                      window.location.href = "http://localhost:8080/logout";

                    })
                  } else {
                    return;
                  }
                }}
        >탈퇴
        </button>
      </div>


    </div>
  )
}
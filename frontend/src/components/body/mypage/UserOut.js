import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from './UserOut.module.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function () {
  const [check, setCheck] = useState(false);

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
          <li className={style.l}>탈퇴 후에도 회원님께서 등록한 게시물 및 댓글은 사이트에 그대로 남아있습니다. 탈퇴 후에는 회원정보가 삭제되어 본인 여부를 확인할 수 없으므로 게시글을 임의로 삭제해드릴 수 없습니다. 먼저 해당 게시물을 삭제하신 후 탈퇴를 신청하시기 바랍니다.</li>
          <li className={style.l}>동일 아이디는 탈퇴 후 7일 간 재사용할 수 없습니다.</li>
          <li className={style.l}>탈퇴한 계정 및 이용 내역은 복구할 수 없으니 탈퇴 시 유의하시기 바랍니다.</li>
          <li className={style.l}>아이디(이메일), 이메일, 비밀번호는 부정 이용ㆍ탈퇴 방지를 위해 탈퇴 요청 시 7일 간 별도 보관 후 파기합니다. </li>
        </ul>
      </div>
      <hr></hr>
      <div>
        <input type='checkbox' className='mt-2' id = 'check'
        onChange={(e) => checkedHandler(e.target.checked,'check')}></input>
        <span className={style.span}>위 내용을 모두 확인했습니다 (필수)</span>
      </div>
      <div className='mt-3'>
        <input type='text' placeholder='비밀번호를 입력해주세요' className={style.userout_input}></input>
        <button className='btn btn-dark ms-4'
          style={{ fontSize: "14px" }}
          onClick={() => {
            if(check == false) {
              alert('약관 동의 후 회원탈퇴를 진행할 수 있습니다.')
              return;
            }
            if (window.confirm("정말 탈퇴하시겠습니까?")) {
              alert('회원 탈퇴가 완료되었습니다.')
            } else {
              return;
            }
          }}
        >탈퇴</button>
      </div>



    </div>
  )
}
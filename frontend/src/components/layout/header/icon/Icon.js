import style from './Icon.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


function LogOutIcon() {
  return (
    <>
      <div className={`${style.icon} d-none d-sm-block`}>
        <ul className={style.icon_list}>
          <Link to="/login">
            <li className='mt-2'>
              <i className="ri-user-6-line"></i>
              <span className={style.icon_text}>Login</span>
            </li>
          </Link>
          <Link to="/join">
            <li className='mt-2'>
              <i className="ri-user-add-fill"></i>
              <span className={style.icon_text}>Join</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className={`${style.search_icon} d-block d-sm-none`}>
        <ul className={`${style.search_list} mt-3`}>
          <Link to="/search">
            <li>
              <i className={`${style.search_icon} ri-search-2-line`}/>
            </li>
          </Link>
        </ul>
      </div>
    </>

  )
}


function LoginIcon({user}) {
  return (
    <>
      <div className={`${style.icon} d-none d-sm-block`}>
        <ul className={style.icon_list}>
          <Link to="/mypage/info">
            <li className='mt-2'>
              <i className="ri-hearts-fill"></i>
              <span className={style.icon_text}>Mypage</span>
            </li>
          </Link>
          {
            user.vendor === "google" ?
            <Link to="https://accounts.google.com/Logout" onClick={() => {
            localStorage.removeItem("isLoggedIn")
            localStorage.removeItem("user")
          }}>
            <li className='mt-2'>
              <i className="ri-user-4-line"></i>
              <span className={style.icon_text}>Logout</span>
            </li>
          </Link> :
          <Link to="http://localhost:8080/logout" onClick={() => {
            localStorage.removeItem("isLoggedIn")
            localStorage.removeItem("user")
          }}>
            <li className='mt-2'>
              <i className="ri-user-4-line"></i>
              <span className={style.icon_text}>Logout</span>
            </li>
          </Link>
          }

        </ul>
      </div>
      <div className={`${style.search_icon} d-block d-sm-none`}>
        <ul className={`${style.search_list} mt-3`}>
          <Link to="/search">
            <li>
              <i className={`${style.search_icon} ri-search-2-line`}/>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}


export {LogOutIcon, LoginIcon};
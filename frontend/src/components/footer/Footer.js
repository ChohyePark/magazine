import style from './Footer.module.css';
import logo from '../../assets/images/footer_logo.png'
import { Link } from 'react-router-dom';

function Footer({ user }) {

  const MemberFooter = () => {
    return (
      <div className={`${style.footer_min} container-flud fixed-bottom d-md-none`}>
        <div className="row">
          <div className="col-3">
            <Link to="/">
              <i className={`${style.footer_icon} ri-home-heart-line`}></i>
              <span className={style.footer_text}>Home</span>
            </Link>
          </div>
          <div className="col-3">
            <Link to="mypage/info">
              <i className={`${style.footer_icon} ri-user-line`}></i>
              <span className={style.footer_text}>Mypage</span></Link>
          </div>
          <div className="col-3">
            <Link to="/posts">
              <i className={`${style.footer_icon} ri-book-read-line`}></i>
              <span className={style.footer_text}>Contents</span>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/newpost">
              <i className={`${style.footer_icon} ri-quill-pen-line`}></i>
              <span className={style.footer_text}>Write</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const GuestFooter = () => {
    return (
      <div className={`${style.footer_min} container-flud fixed-bottom d-md-none`}>
        <div className="row">
          <div className="col-4">
            <Link to="/">
              <i className={`${style.footer_icon} ri-home-heart-line`}></i>
              <span className={style.footer_text}>Home</span>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/login">
              <i className={`${style.footer_icon} ri-login-box-line`}></i>
              <span className={style.footer_text}>Login</span>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/posts">
              <i className={`${style.footer_icon} ri-book-read-line`}></i>
              <span className={style.footer_text}>Contents</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className={`${style.footer} d-none d-md-block`}>
        <div className={`${style.footer_t} row`}>
          <div className="col-4 footer-l">
            <ul className={`${style.footer_list} mt-4`}>
              <li><h3 style={{ fontSize: "1rem" }}>Bang-Guseog</h3></li>
              <li className="ml-1 mt-3">BGS INC.</li>
              <li className="ml-1">Seoul Republic of Korea | 070 5878 2939 | info@bgsmag.com</li>
            </ul>
          </div>
          <div className="col-4" style={{ padding: "0px" }}>
          </div>
          <div className="col-4 d-flex justify-content-center footer-r" style={{ padding: "0px" }}>
            <div className={style.logoBox}>
              <img src={logo} style={{ width: "100%", height: "100%" }}></img>
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: "0px" }}>
          <div className={`${style.copyRight} col-12 d-flex justify-content-center mb-4 copyRight`}
            style={{ padding: "0px" }}>
            COPYRIGHT © BangGuseog ALL RIGHTS RESERVED / SITE BY 42KH
          </div>
        </div>
      </div>
      {user ? <MemberFooter></MemberFooter> : <GuestFooter></GuestFooter>}
    </>
  )
}

export default Footer;

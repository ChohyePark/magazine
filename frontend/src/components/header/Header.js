import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './navi/Navi';
import { LoginIcon, LogOutIcon } from './icon/Icon';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import Footer from '../footer/Footer'

export default function ({ user }) {

  useEffect(() => {
    console.log(user);
  }, [user])

  const Header = () => {
    return (
      <div className="row sticky-top header" style={{ margin: "0px", backgroundColor: "white" }}>
        <div className="col-6 col-md-2 mt-2 logo_box" style={{ margin: "auto", width: "7rem", height: "5rem"}}
          onClick={() => {
            window.location.href = "/"
          }}
        >
          <img src={logo} style={{ width: "100%", height: "100%" }} className='d-none d-md-block' />
        </div>
        <div className="d-none d-md-block col-md-8">
          <Navi></Navi>
        </div>
        <div className="col-6 col-sm-none col-md-2" id="icon_area">
          {user ? <LoginIcon user={user}></LoginIcon> : <LogOutIcon></LogOutIcon>}
        </div>
      </div>
    )
  }
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer user={user}></Footer>
    </>
  )
}
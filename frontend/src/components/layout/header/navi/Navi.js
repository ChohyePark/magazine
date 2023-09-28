import style from './Navi.module.css';
import {Link} from 'react-router-dom';


function Navi() {
  return (
    <nav className={`${style.navi_container} navbar d-none d-md-block navbar-expand-lg`}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`${style.first_navi} nav-item`} id='test'>
              <div className={style.circle}></div>
              <Link to="/" className='nav-link active' aria-current='page'>Magazine Story </Link>
            </li>
            <li className={`${style.second_navi} nav-item`}>
              <div className={style.circle2}></div>
              <Link to="/posts" className='nav-link active'>Contents</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navi;
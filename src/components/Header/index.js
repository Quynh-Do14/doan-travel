import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import './header.css'
import SearchTxt from '../Search/SearchTxt';
import Searchroutes from '../Search/Search.routes';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import logo from '../Asset/logo.png'
import LoginSuccess from '../../Auth/Login/LoginSuccess';
import NotLogin from '../../Auth/Login/NotLogin';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  const headerRef = useRef();
  return (
    <div>
      <div className='header' ref={headerRef}>
        <div className='log'>
          <div className='phone-number'><LocalPhoneIcon /> 0325.488.769</div>
          {/* <Link to='/Login2'><div className='login-header'><PersonRoundedIcon /> Log In</div></Link>
          <Link to='/Signin2'><div className='login-header'><AssignmentIndIcon /> Sign In</div></Link> */}
          {/* 
          <Link to='/SiginAuth'><div className='login-header'><AssignmentIndIcon /> Sign In</div></Link> */}
          {localStorage.getItem("loginSuccess") ? <LoginSuccess /> : <NotLogin />}

        </div>

        <div className='main-menu'>
          <img className='logo' src={logo} />
          <Link to='/'> <div className='menu'>Trang chủ</div></Link>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown">
              <Link to='/Product'> <div className='menu'>Tour</div></Link>
            </a>
            <div className="dropdown-content">
              <a className="dropdown-item" href="#"><Link to='/CreateTour'><li className='menu-con'>Tạo Tour</li></Link></a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#"></a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown">
              <Link to='/Hotel'><div className='menu menu-drop'> Khách sạn</div></Link>
            </a>
            <div className="dropdown-content">
              <a className="dropdown-item" href="#"><Link to='/HomeStay'><li className='menu-con'>HomeStay</li></Link></a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#"><Link to='/Restaurant'> <div className='menu-con'>Nhà hàng </div></Link></a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#"></a>
            </div>
          </li>
          <Link to='/Vehicle'><div className='menu'>Phương tiện</div></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
import { useRef, useState } from "react";
import React from 'react';
import { useHistory, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const LoginSuccess = () => {

    const dangxuat = useRef();
    const history = useHistory()
    const [status, setstatus] = useState(true);

    const dangxuata = () => {
        localStorage.removeItem("user_auth");
        localStorage.removeItem("loginSuccess");
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_phonenumber");
        localStorage.removeItem("user_address");
        localStorage.removeItem("user_status");
        setstatus(false);
        history.push('/');
        // dangxuat.current.style.display = 'none';
    }

    const hiendangxuat = () => {
        if (status) {
            // dangxuat.current.style.display = 'block';
        }
    }

    return (
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 wrapper__user dangxuat" >
            <i className="fa fa-user menu__user--icon" aria-hidden="true"></i>


            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <span
                        className="menu__user"
                        onClick={() => hiendangxuat()}
                    >
                        <PersonRoundedIcon /> {localStorage.getItem("user_name")}
                    </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Link to="/PersonalPage">
                        <div className="logout-op"><AccountCircleIcon /> Trang cá nhân</div>

                    </Link>
                    <div
                        className="dangxuat-main"
                        style={{ color: 'black' }}
                        ref={dangxuat}
                        onClick={() => dangxuata()}
                    >

                        <Link to="/">
                            <div className="logout-op"><LogoutIcon /> Đăng xuất</div>

                        </Link>

                    </div>

                    {/* <div className="dangxuat-main">Trạng thái: {localStorage.getItem('user_status')}</div> */}
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default LoginSuccess

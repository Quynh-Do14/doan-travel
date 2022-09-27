import React from 'react';
import { Link } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
const NotLogin = () => {
    return (
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 wrapper__user">
            <i className="fa fa-user menu__user--icon" aria-hidden="true"></i>
            <span className="menu__user">
                <Link
                    to="/login"
                    className="login-header"
                >
                   <PersonRoundedIcon/> Đăng nhập
                </Link>
            </span>
        </div>
    )
}

export default NotLogin

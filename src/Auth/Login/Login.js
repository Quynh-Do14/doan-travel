import React, { useState, useRef } from 'react'
import api from '../api/index';
import { useHistory, Link, useLocation } from "react-router-dom";
import axios from 'axios';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import reactReferer from 'react-referer';
const LoginAuth = () => {

    const [username, setusername] = useState("quynhdo")
    const [password, setPassword] = useState("quynhdo")
    const [loading, setloading] = useState(false)
    const loginRef = useRef();
    const signUpRef = useRef();
    const btnSignIn = useRef();

    const history = useHistory();

    const handleDetail = () => {
        history.push('/');
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            setloading(true)
            const result = await api.login({
                username: username,
                password: password
            })
            setloading(false)
            if (result.id) {
                localStorage.setItem("user_auth", result.id);
                localStorage.setItem("user_name", result.username);
                localStorage.setItem("user_email", result.email);
                localStorage.setItem("user_phonenumber", result.phonenumber);
                localStorage.setItem("user_status", result.status);
                localStorage.setItem("user_address", result.address);
                localStorage.setItem("loginSuccess", true);
                history.push('/')
            } else {
                const s1 = loginRef.current;
                s1.innerHTML = `${errTb('Sai tài khoản hoặc mật khẩu', 'danger')}`
            }
        } catch (e) {
        }
        return false;
    }

    const errTb = (text, status) => {
        return `<div className="alert alert-${status} alert-dismissible fade show">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <b>${text}</b>
        </div>`
    }

    return (
        <div>
            <div className='login'>
                <div className="form-tt">
                    <div className="container-form" id="containera" ref={btnSignIn}>
                        <div style={{ position: 'absolute', top: '50px' }} id="errSignIn" ref={loginRef}>
                        </div>
                        <h2>Đăng nhập</h2>
                        <form onSubmit={login}>

                            <input type="text"  name="userName" placeholder="Nhập tên đăng ký"
                                value={username}
                                onChange={e => setusername(e.target.value)} />

                            <input type="password" name="password" placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />

                            <button
                                className="login-button"
                                type='submit'
                            >Đăng nhập{loading && <span style={{ marginLeft: 10 }}
                                className="spinner-border spinner-border-sm" role="status"
                                aria-hidden="true"></span>}</button>

                            {/* <div className='back' onClick={handleDetail}><KeyboardReturnIcon /> Trang chủ</div> */}
                        </form>
                        <Link to='/Signin'><p className="text-signin">Bạn chưa có tài khoản?</p></Link>
            <div className='back' onClick={handleDetail}><KeyboardReturnIcon /> Trang chủ</div>
                    </div>
                </div>
            </div>
            <div
                style={{ zIndex: '1000', position: 'absolute', top: '10px', right: '20px', }}
            >
                <Link to="/" style={{
                    color: 'red',
                    fontSize: '30px',
                    cursor: 'pointer'

                }}><i className='fas fa-times qqqa'></i></Link>
            </div>
            
        </div>


    )
}

export default LoginAuth

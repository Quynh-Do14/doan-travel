import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import './Login.css'
// import { loginUser } from '../Redux/ReduxToolkit/apiRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

 const Login =()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch =useDispatch();

    const navigate = useNavigate();

    const history = useHistory();

    const handleDetail = () => {
        history.push('/');
    }

    const handleLogin =(e)=>{
        e.preventDefault()
        const newUser ={
            username: username,
            password:password
        };

        // loginUser(newUser, dispatch, navigate)
    }


    return (
        <div>
            <div className='login'>
                <div className="form-tt">
                    <h2>Đăng nhập</h2>
                    <form onSubmit={handleLogin} method="post" name="dang-ky">

                        <input type="text" name="username" placeholder="Nhập tên đăng ký" onChange={(e)=>setUsername(e.target.value)} />
                        <input type="password" name="password" placeholder="Nhập mật khẩu" onChange={(e)=>setPassword(e.target.value)} />
                        <input type="checkbox" id="checkbox" name="checkbox" /><label className="checkbox-text">Nhớ đăng nhập lần sau</label>
                        <input type="submit" name="submit" value="Đăng nhập" />
                        <label className="psw-text">Quên mật khẩu</label>
                        <Link to='/Signin'><p className="text-signin">Bạn chưa có tài khoản?</p></Link>
                        <div className='back' onClick={handleDetail}><KeyboardReturnIcon /> Trang chủ</div>
                    </form>

                </div>

            </div>
        </div>
    )
}
export default Login
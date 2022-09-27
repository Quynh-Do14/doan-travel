import React from 'react';
import api from '../api/index';
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useState } from 'react';

const RegisterAuth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory();

    const URL = 'http://localhost:8080/api/auth/signup';
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post(URL, {
        username: username,
        password: password,
        phonenumber: phonenumber,
        address: address,
        email: email,
      }).then(
        res => {
          console.log(res);
          alert(' thành công')
        }
      ).catch(
        err => {
          console.log(err);
          alert('thất bại')
        }
      )
    }

    const handleDetail = () => {
        history.push('/login');
    }
    return (

        <div>
            <div className='login'>
                <div className="form-tt">
                    <h2>Đăng kí</h2>
                    <form onSubmit={handleSubmit} >
                        <input type="text" name="username" placeholder="Nhập tên đăng ký"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />

                        <input type="email" name="email" placeholder="Nhập tên email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />

                        <input type="tel" name="phonenumber" placeholder="Nhập số điện thoại"
                            value={phonenumber}
                            onChange={e => setPhonenumber(e.target.value)} />

                        <input type="text" name="address" placeholder="Nhập tên địa chi"
                            value={address}
                            onChange={e => setAddress(e.target.value)} />

                        <input type="password" name="password" placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />

                        <button type="submit" name="submit"> Đăng kí</button>
                        <div className='back' onClick={handleDetail}><KeyboardReturnIcon />Quay lại Đăng nhập</div>
                    </form>

                </div>

            </div>
        </div>

    )
}

export default RegisterAuth

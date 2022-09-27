import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Login.css'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import axios from 'axios';
export default function Signin() {

  const history = useHistory();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const URL = 'http://localhost:8080/api/auth/signin';

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
    history.push('/');
  }
  return (
    <div>
      <div className='login'>
        <div className="form-tt">
          <h2>Đăng nhập</h2>
          <form onSubmit={handleSubmit}>

            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nhập tên đăng ký" />
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Nhập tên email" />
            <input type="tel" name="phonenumber" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} placeholder="Nhập số điện thoại" />
            <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Nhập số địa chỉ" />
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Nhập mật khẩu" />

            <input type="submit" name="submit" value="Đăng kí" />
            <div className='back' onClick={handleDetail}><KeyboardReturnIcon /> Trang chủ</div>
          </form>

        </div>

      </div>
    </div>
  )
}

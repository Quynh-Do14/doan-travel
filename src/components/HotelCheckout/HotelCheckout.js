import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './HotelCheckout.css';
import imghotel from '../Asset/hotel-img.jpg'
import axios from 'axios';
import { useRef } from 'react';
// import { CheckOutlined } from '@ant-design/icons';
// import { Button, notification } from 'antd'

const HotelCheckout = (cart) => {

  const state = useSelector((state) => state.addItem)
  const history = useHistory();

  const CheckoutCart = (cart) => {
    const url = "http://localhost:8080/review/api/info/bookHotel"
    const urlEmail = "http://localhost:8080/sendMailHotel"
    const urlSubtract = `http://localhost:8080/review/api/carthotel/${cart.id}`
    const [fullname, setFullname] = useState('')
    const [cmt, setCmt] = useState('')
    const [phonenumber, setPhonenumber] = useState(localStorage.getItem('user_phonenumber'))
    const [email, setEmail] = useState(localStorage.getItem('user_email'))
    const [address, setAddress] = useState(localStorage.getItem('user_address'))
    const [note, setNote] = useState('')
    const [hotelName, setHotelName] = useState(cart.hotelName)
    const [price, setPrice] = useState(cart.price)
    const [idUser, setIdUser] = useState(localStorage.getItem('user_auth'))
    const [imgURL, setImgURL] = useState(cart.imgURL)
    const [hotline, setHotline] = useState(cart.hotline)
    const [status, setStatus] = useState(1)
    const [start, setStart] = useState('')
    const [createdAt, setCreatedAt] = useState(new Date().toLocaleString('vi-VN', { timeZone: 'UTC' }))

    const SubmitInfo = async (e) => {
      e.preventDefault();
      axios.post(url, {
        // id : id,
        fullname: fullname,
        cmt: cmt,
        phonenumber: phonenumber,
        email: email,
        address: address,
        note: note,
        hotelName: hotelName,
        price: price,
        idUser: idUser,
        imgURL: imgURL,
        status: status,
        start: start,
        createdAt: createdAt,
      })
        .then(
          axios.post(urlEmail, {
            email: email,
            fullname: fullname,
            hotelName: hotelName,
            hotline: hotline
          })
        ).then(
          axios.post(urlSubtract, {
          })
        ).then(res => {
          console.log(res);
          // notification.open({
          //   message: 'Thành công ',
          //   description:
          //     'Đặt phòng thành công',
          //   icon: <CheckOutlined style={{ color: '#108ee9' }} />

          // });
          alert('Đặt phòng thành công')
        })
        .catch((error) => {
          console.log(error);
          // notification.open({
          //   message: 'Thất bại ',
          //   description:
          //     'Đặt phòng thất bại',

          // });
          alert('Đặt phòng thất bại')
        })
    }

    const handleDetail = () => {
      history.push('/hotel');
    }

    const createTime = useRef()

    useEffect(() => {
      createTime.current = setTimeout(() => {
        setCreatedAt(new Date().toLocaleString('vi-VN', { timeZone: 'UTC' }))
      }, 1000)
    }, [createdAt])

    return (
      <div className='body'>

        <div className='checkout'>
          <div className='headCheck' >
            <div className='btn-back' onClick={handleDetail}><KeyboardReturnIcon />Trang chủ</div>
            <b className='hotline'>HotLine: 1900 1177</b>

          </div>
          <div className="container containercheckout-hotel  mt-5 px-1">

            <div className="mb- title-check text-uppercase">
              <h2>Khách hàng nhập thông tin cá nhân</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* card p-3 thay thể card-check */}

                <div className="card-check checkout-main">

                  <div className='banner-checkout'>
                    <div className='hotelname-check'>{cart.hotelName} </div>
                    <div className='cnt-title'>Liên hệ đặt phòng</div>
                    <div className='hotline-check'><PhoneIphoneIcon /> {cart.hotline} </div>
                    <img src={imghotel} />
                  </div>
                  {/* Form */}
                  <form onSubmit={(e) => SubmitInfo(e)} className='form-hotle-checkout'>
                    <h6 className="text-uppercase">Tên khách hàng</h6>
                    <div className="inputbox mt-3"> <input type="text" onChange={e => setFullname(e.target.value)}
                      id="fullname" value={fullname} className="form-control" required="required" />
                      <span>Nhập tên khách hàng</span>
                    </div>

                    <h6 className="text-uppercase">Số CMT/CCCD</h6>
                    <div className="inputbox mt-3"> <input type="number" onChange={e => setCmt(e.target.value)}
                      id="cmt" value={cmt} className="form-control" required="required" />
                      <span>Nhập số CMT/CCCD</span>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="inputbox mt-3 mr-2"> <input type="number" onChange={e => setPhonenumber(e.target.value)}
                          id="phonenumber"
                          value={phonenumber}
                          // value={localStorage.getItem('user_phonenumber')} 
                          className="form-control" required="required" /> <i className="fa fa-credit-card"></i> <span>Số điện thoại</span> </div>
                      </div>

                      <div className="col-md-6">
                        <div className="d-flex flex-row">
                          <div className="inputbox mt-3 mr-2"> <input type="text" onChange={e => setEmail(e.target.value)} id="email"
                            value={email}
                            // value={localStorage.getItem('user_email')} 
                            className="form-control" required="required" /> <span>Email</span> </div>
                        </div>
                      </div>
                    </div>

                    <h6 className="text-uppercase">Ngày nhận phòng</h6>
                    <div className="inputbox mb-5">
                      <input type="date"
                        onChange={e => {
                          setStart(e.target.value);
                        }}
                        value={start} id="start" className="form-control"
                      />
                    </div>

                    <div className="mt-4 mb-4">
                      <div className="row mt-2">
                        <div className="inputbox mt-3 mr-2"> <input type="text" onChange={e => setAddress(e.target.value)}
                          id="address" value={address} className="form-control" required="required" />
                          <span>Địa chỉ</span>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="inputbox mt-3 mr-2"> <input type="text" onChange={e => setNote(e.target.value)}
                          id="note" value={note} className="form-control" />
                          <span>Ghi chú</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mb-4">
                      <input type="hidden" onChange={e => setHotelName(e.target.value)}
                        id="hotelName" value={hotelName} className="form-control" required="required" />

                      <input type="hidden" onChange={e => setPrice(e.target.value)}
                        id="price" value={price} className="form-control" required="required" />

                      <input type="hidden" onChange={e => setIdUser(e.target.value)}
                        id="idUser" value={idUser} className="form-control" required="required" />

                      <input type="hidden" onChange={e => setImgURL(e.target.value)}
                        id="imgURL" value={imgURL} className="form-control" required="required" />

                      <input type="hidden" onChange={e => setHotline(e.target.value)}
                        id="hotline" value={hotline} className="form-control" required="required" />

                      <input type="hidden" onChange={e => setStatus(e.target.value)}
                        id="status" value={status} className="form-control" required="required" />

                      <input type="hidden" onChange={e => setCreatedAt(e.target.value)}
                        id="createdAt" value={createdAt} className="form-control" required="required" />
                    
                    </div>
                    <button type='submit' className='btn-hotel-des'>Liên hệ   </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    )
  }
  return (
    <>
      <div className='body'>
        {
          CheckoutCart(state.cart)
        }
      </div>
    </>
  )

}
export default HotelCheckout;
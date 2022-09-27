import React, { useEffect, useRef, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import './Checkout.css'
import axios from 'axios';
var total
var fin
const Checkout = () => {

  const state = useSelector((state) => state.addItem)
  const [data, setData] = useState([])

  const [adult, setAdult] = useState(1)
  const [kid, setKid] = useState(0)
  const [kid2, setKid2] = useState(0)
  const [kid3, setKid3] = useState(0)

  const [calculation, setCalculation] = useState(0)
  const [calculationKid, setCalculationKid] = useState(0)
  const [calculationKid2, setCalculationKid2] = useState(0)
  const [calculationKid3, setCalculationKid3] = useState(0)

  const [calculationDown, setCalculationDown] = useState(0)
  const [calculationDownKid, setCalculationDownKid] = useState(0)
  const [calculationDownKid2, setCalculationDownKid2] = useState(0)
  const [calculationDownKid3, setCalculationDownKid3] = useState(0)

  const history = useHistory();


  const handleDetail = () => {
    history.push('/product');
  }
  const CheckoutCart = (cart) => {
    const [fullname, setFullname] = useState('')
    const [cmt, setCmt] = useState('')
    const [phonenumber, setPhonenumber] = useState(localStorage.getItem('user_phonenumber'))
    const [email, setEmail] = useState(localStorage.getItem('user_email'))
    const [address, setAddress] = useState(localStorage.getItem('user_address'))
    const [note, setNote] = useState('')
    const [nametour, setNametour] = useState(cart.nametour)
    const [priceTour, setPriceTour] = useState(cart.price)
    const [idTour, setIdTour] = useState(cart.tourId)
    const [start, setStart] = useState('')
    const [idUser, setIdUser] = useState(localStorage.getItem('user_auth'))
    const [imgURL, setImgURL] = useState(cart.imgURL)
    const [createdAt, setCreatedAt] = useState(new Date().toLocaleString('vi-VN', { timeZone: 'UTC' }))
    const [status, setStatus] = useState(1)

    const history = useHistory()

    const itemList = () => {
      total = calculation + calculationKid + calculationKid2 + calculationKid3
    }
    useEffect(() => {
      setCalculation(() => adult * cart.price)
      setCalculationDown(() => calculation / adult)

      setCalculationKid(() => kid * cart.priceKid)
      setCalculationDownKid(() => calculationKid / kid)

      setCalculationKid2(() => kid2 * cart.priceKid2)
      setCalculationDownKid2(() => calculationKid2 / kid2)

      setCalculationKid3(() => kid3 * cart.priceKid3)
      setCalculationDownKid3(() => calculationKid3 / kid3)

      setPriceTour(cart.price * adult + kid * cart.priceKid + kid2 * cart.priceKid2 + kid3 * cart.priceKid3)
    }, [adult, kid, kid2, kid3])

    const adultAdd = () => {
      setAdult((adult) => adult + 1)
    }
    const adultSubtract = () => {
      if (adult <= 1) {
        setAdult(adult)
      }
      else {
        setAdult((adult) => adult - 1)
      }
    }

    const kidAdd = () => {
      setKid((kid) => kid + 1)
    }
    const kidSubtract = () => {
      if (kid <= 0) {
        setKid(kid)
      }
      else {
        setKid((kid) => kid - 1)
      }
    }

    const kid2Add = () => {
      setKid2((kid2) => kid2 + 1)
    }
    const kid2Subtract = () => {
      if (kid2 <= 0) {
        setKid2(kid2)
      }
      else {
        setKid2((kid2) => kid2 - 1)
      }
    }

    const kid3Add = () => {
      setKid3((kid3) => kid3 + 1)
    }
    const kid3Subtract = () => {
      if (kid3 <= 0) {
        setKid3(kid3)
      }
      else {
        setKid3((kid3) => kid3 - 1)
      }
    }


    const createTime = useRef()

    useEffect(() => {
      createTime.current = setTimeout(() => {
        setCreatedAt(new Date().toLocaleString('vi-VN', { timeZone: 'UTC' }))
      }, 1000)
    }, [createdAt])

    useEffect(() => {
      const GetProfile = async () => {
        const response = await fetch(`http://localhost:8080/review/api/info/PersonalBookingTour/${localStorage.getItem('user_auth')}`);
        var d = await response.json();
        setData(d)
        console.log(d.map((item) => (
          item.status == 1
        )).indexOf(false) != -1)
      }
      GetProfile()
    }, [])

    const URL = "http://localhost:8080/review/api/info/bookTour";
    const urlEmail = "http://localhost:8080/sendMailTour"
    const urlSubtract = `http://localhost:8080/review/api/carttour/${cart.id}`
    const urlInTour = `http://localhost:8080/user/checkStatusInTour/${localStorage.getItem('user_auth')}`

    function SubmitInfo(e) {
      e.preventDefault();
      axios.post(URL, {
        fullname: fullname,
        cmt: cmt,
        phonenumber: phonenumber,
        email: email,
        address: address,
        nametour: nametour,
        priceTour: priceTour,
        idTour: idTour,
        start: start,
        note: note,
        idUser: idUser,
        imgURL: imgURL,
        createdAt: createdAt,
        status: status
      })
        .then(
          axios.post(urlEmail, {
            email: email,
            fullname: fullname,
            nametour: nametour,
          })
        ).then(
          axios.post(urlSubtract, {
          })
        ).then(
          axios.post(urlInTour, {
          })
        ).then(res => {
          console.log(res);
          // notification.open({
          //   message: 'Thành công ',
          //   description:
          //     'Đặt phòng thành công',
          //   icon: <CheckOutlined style={{ color: '#108ee9' }} />

          // });
          // history.push('/BookTourSuccess')
          alert('Đặt tour thành công')
        })
        .catch((error) => {
          console.log(error);
          // notification.open({
          //   message: 'Thất bại ',
          //   description:
          //     'Đặt phòng thất bại',

          // });
          alert('Đặt tour thất bại')
        })
    }

    // const dateTime = new Date()
    // let minute = dateTime.getMinutes()
    // let hour = dateTime.getHours()
    // let day = dateTime.getDate()
    // let month = dateTime.getMonth()
    // let year = dateTime.getFullYear()
    // var fin = (hour + ':' + minute + ' ' + day + '/' + month + '/' + year)
    // useEffect(()=>{
    //   setTimeout(new Date().toLocaleString(),1000)
    // },[])

    return (
      <div className='body'>
        <div className='checkout'>
          <div className='headCheck'>
            <div className='btn-back' onClick={handleDetail}><KeyboardReturnIcon />Trang chủ</div>
            <b className='hotline'>HotLine: 1900 1177</b>

          </div>
          <div className="container containercheckout mt-5 px-5">
            <div className="mb-4 title-check text-uppercase">
              <h2>Khách hàng nhập thông tin cá nhân</h2>
            </div>
            <div className="row">
              <div className="col-md-8">
                {/* card p-3 thay thể card-check */}
                <div className='form-info'>
                  <form onSubmit={SubmitInfo} className="card-check">
                    <h6 className="text-uppercase">Tên khách hàng</h6>
                    <div className="inputbox mt-3"> <input type="text"
                      onChange={e => setFullname(e.target.value)}
                      value={fullname} id="fullname" className="form-control" required="required" />
                      <span>Nhập tên khách hàng</span>
                    </div>

                    <h6 className="text-uppercase">CMT/CCCD</h6>
                    <div className="inputbox mt-3"> <input type="text"
                      onChange={e => setCmt(e.target.value)}
                      value={cmt} id="cmt" className="form-control" required="required" />
                      <span>Nhập số CMT/ CCCD</span>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="text-uppercase">Số điện thoại</h6>
                        <div className="inputbox mt-3 mr-2">
                          <input type="tel"
                            onChange={e => setPhonenumber(e.target.value)}
                            value={phonenumber} id="phonenumber"
                            className="form-control" required="required" />
                        </div>

                      </div>
                      <div className="col-md-6">
                        <h6 className="text-uppercase">Email</h6>
                        <div className="inputbox mt-3 mr-2">
                          <input type="email"
                            onChange={e => setEmail(e.target.value)}
                            className="form-control" required="required"
                            value={email}
                            id='email' />
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 mb-4">
                      <div className="inputbox mt-3 mr-2">
                        <input type="text"
                          onChange={e => setAddress(e.target.value)}
                          id="address"
                          value={address} className="form-control" required="required" />
                        <span>Địa chỉ</span>
                      </div>

                      <h6 className="text-uppercase">Ngày khởi hành</h6>
                      <div className="inputbox mb-5">
                        <input type="date"
                          onChange={e => {
                            setStart(e.target.value);
                          }}
                          value={start} id="start" className="form-control"
                        />
                      </div>

                      <div className="inputbox mt-3">
                        <input type="text"
                          onChange={e => setNote(e.target.value)}
                          value={note} id="note" className="form-control"
                        />
                        <span>Ghi chú</span>
                      </div>

                      <input type="hidden"
                        onChange={e => setNametour(e.target.value)}
                        value={nametour} id="nametour" className="form-control"
                      />

                      <input type="hidden"
                        onChange={e => setPriceTour(e.target.value)}
                        value={priceTour} id="priceTour" className="form-control"
                      />

                      <input type="hidden"
                        onChange={e => setIdUser(e.target.value)}
                        value={idUser} id="idUser" className="form-control"
                      />

                      <input type="hidden"
                        onChange={e => setIdTour(e.target.value)}
                        value={idTour} id="idTour" className="form-control"
                      />

                      <input type="hidden"
                        onChange={e => setImgURL(e.target.value)}
                        value={imgURL} id="imgURL" className="form-control"
                      />

                      <input type="hidden"
                        onChange={e => {
                          setStatus(e.target.value);
                        }}
                        value={status} id="status" className="form-control"
                      />

                      <input type="hidden"
                        onChange={e => {
                          setCreatedAt(e.target.value);
                        }}
                        value={createdAt} id="createdAt" className="form-control"
                      />
                    </div>

                    <div className="mt-4 mb-4">
                      <div className="row mt-3">
                        <div className="col-md-6">

                          <label>Người lớn:</label>
                          <div className="inputbox mt-3 mr-2">
                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={adultAdd}>+</button>
                            <p>Số lượng {adult}</p>
                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={adultSubtract}>-</button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label>Trẻ em (5-11 tuổi):</label>
                          <div className="inputbox mt-3 mr-2">
                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={kidAdd}>+</button>

                            <p>Số lượng {kid}</p>
                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={kidSubtract}>-</button>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label>Trẻ em (2-5 tuổi):</label>
                          <div className="inputbox mt-3 mr-2">
                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={kid2Add}>+</button>
                            <p>Số lượng {kid2}</p>
                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={kid2Subtract}>-</button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label>Trẻ em(Nhỏ hơn 2 tuổi):</label>
                          <div className="inputbox mt-3 mr-2">

                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={kid3Add}>+</button>
                            <p>Số lượng {kid3}</p>
                            <button type="button" className="btn btn-outline-dark salary"
                              onClick={kid3Subtract}>-</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mb-4">
                      <h6 className="text-uppercase">Phương thức thanh toán</h6>
                      <div className="row mt-3">

                        <div className="col-md-6">
                          <div className="">
                            <input type='radio' id="" className="" />
                            <span>Thanh toán bằng tiền mặt</span>
                          </div>

                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <input type='radio' id="" className="" />
                            <span>Thanh toán qua ngân hàng</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {
                      data.map((item) => (
                        item.status == 1 || item.status == 2
                      )).indexOf(false) != -1

                        ?
                        <h3 style={{color :'red'}}>Bạn phải hoàn thành tất cả các tour!! </h3>


                        :
                        <button className="hightlight" type='submit'>
                          Nhập thông tin khách hàng</button>
                    }
                    {/* <button className="hightlight" type='submit'>
                      Nhập thông tin khách hàng</button> */}

                    {/* {
                      data.map((item) => (
                        <div>
                          {
                            item.status == 1 || item.status == 2
                              ?
                              <div>Bạn phải hoàn thành tất cả các tour </div>
                              :
                              <button className="hightlight" type='submit'>
                                Nhập thông tin khách hàng</button>
                          }
                        </div>

                      ))
                    } */}

                  </form>
                </div>



                <div className='pricetbl'>
                  <b className='tbl-check-title '>Bảng giá Tour chi tiết</b>
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <td className='thead-check'>Phân loại</td>
                        <td className='thead-check'>Người lớn</td>
                        <td className='thead-check'> Trẻ em (5-11 tuổi) </td>
                        <td className='thead-check'> Trẻ em (2-5 tuổi)</td>
                        <td className='thead-check'> Trẻ em (Dưới 2 tuổi)</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='thead-check'>Giá</td>
                        <td className='thead-check'>{(cart.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</td>
                        <td className='thead-check'> {(cart.priceKid).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ </td>
                        <td className='thead-check'> {(cart.priceKid2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</td>
                        <td className='thead-check'> {(cart.priceKid3).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-4">
                <div className=''>

                  <div className="check">
                    <div className='info-tour'>
                      <div className='name-tour-check'>{cart.nametour}  </div>
                      <table className="">

                        <tr className=''>
                          <td scope="col" className='tb-check sel'> Mã Tour:</td>
                          <td cope="col" className='tb-check'>{cart.tourId} </td>
                        </tr>

                        <tr className=''>
                          <td scope="col" className='tb-check sel'> Giá:</td>
                          <td cope="col" className='tb-check'>
                            {/* {state.map(itemList)}  */}
                            {itemList(state.cart)}
                            {(total).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</td>
                        </tr>

                        <tr className=''>
                          <td scope="col" className='tb-check sel'>Thời gian:</td>
                          <td cope="col" className='tb-check'>{cart.time}</td>
                        </tr>

                        <tr className=''>
                          <td scope="col" className='tb-check sel'>Xuất phát:</td>
                          <td cope="col" className='tb-check'>{cart.place}</td>
                        </tr>

                        <tr className=''>
                          <td scope="col" className='tb-check sel'>Điểm đến:</td>
                          <td cope="col" className='tb-check'>{cart.arrival}</td>
                        </tr>

                      </table>
                    </div>
                    <div className="d-flex flex-row align-items-end mb-3">
                      <h1 className="mb-0 yellow"></h1>
                    </div> <span></span> <a href="#" className="yellow decoration"></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }

  return (
    <div>
      {/* {state.map(CheckoutCart)} */}
      {
        CheckoutCart(state.cart)
      }
    </div>
  )
}
export default Checkout;
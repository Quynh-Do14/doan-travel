
import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import Footer from '../../../Footer/footer';
import Header from '../../../Header';
import './DetailHotel.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SellIcon from '@mui/icons-material/Sell';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import { addCart } from '../../../../Redux/Action';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
const DetailHotel = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [open, setOpen] = useState(false);

    const history = useHistory();

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))

        if(localStorage.getItem("user_auth")){
            history.push('/HotelCheckout')
        }
        else{
            history.push('/Login')
            alert("Bạn cần phải đăng nhập trước tiên !!!");
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/review/api/detailhotel/${id}`)

            setProduct(await response.json())
            setLoading(false)
        }

        getProduct();
    }, [])
    const Loading = () => {
        return (
            <>Loading</>
        )
    }
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    }
    const handletab2 = () => {
        setActiveTab("tab2")
    }
    const handletab3 = () => {
        setActiveTab("tab3")
    }

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const ShowProduct = () => {
        return (
            <>
                <div className='detail-hotel'>
                    <div>
                        <div className='title-hotel'>{product.hotelName}</div>
                        <div className='img-option'>
                            <img className='img-det-hot' src={"http://localhost:8080/uploads/" + product.imgURL} />
                            <div className='utilities'>
                                <div> <ApartmentIcon />Trang thiết bị khách sạn</div>
                                <ul className='utiulties-option'>
                                    <li className='utilities-option'><FreeBreakfastIcon /> Phục vụ bữa sáng</li>
                                    <li className='utilities-option'><NetworkWifiIcon /> Wifi miễn phí</li>
                                    <li className='utilities-option'><DirectionsCarIcon /> Đưa đón sân bay</li>
                                    {
                                    product.remaining == 0
                                        ?
                                        <div> <li className='tb'><HorizontalSplitIcon />Phòng trống: Đã hết </li> </div>
                                        :
                                        <div><li className='tb'><HorizontalSplitIcon />Phòng trống: {product.remaining} </li></div>
                                }
                                </ul>
                                <div><SellIcon /> Giá từ: {(product.price)} </div>
                                {/* <Link to='/HotelCheckout'> */}
                                
                                {
                                product.remaining == 0
                                    ?
                                    <div className='btn-noti'>Bạn không thể đặt phòng này vì số lượng đặt phòng đã hết </div>
                                    :
                                    <div className='btn-hotel-des' onClick={() => addProduct(product)}>Liên hệ   </div>
                            }
             
                                    {/* </Link> */}
                                {/* <div className='btn-hotel-des' onClick={handleClickOpen}>Liên hệ   </div> */}

                                <div className='hotline-hotle'> HOTLINE: {product.hotline} </div>
                            </div>
                        </div>
                        <div className='hotel-des'>{product.description} </div>
                    </div>

                    <div className='schedule-hotel '>
                        <div className='tab-product'>
                            <li id='tab-btn' onClick={handleTab1} className={activeTab === "tab1" ? "lively" : ""}>Tổng quan</li>
                            <li id='tab-btn' onClick={handletab2} className={activeTab === "tab2" ? "lively" : ""}>Điều khoản</li>
                            <li id='tab-btn' onClick={handletab3} className={activeTab === "tab3" ? "lively" : ""}>Chú ý</li>
                        </div>
                        <div className='outlet'>
                            {activeTab === "tab1" ?
                                <div>
                                    <p className='title-des'> Tổng quan</p>
                                    <pre className='schedule-everyday'>{product.overview} </pre>
                                </div> :
                                activeTab === "tab2" ?
                                    <div>
                                        <p className='title-des'> Điều khoản</p>
                                        <pre className='schedule-everyday'>{product.policy} </pre>
                                    </div> :
                                    <div>
                                        <p className='title-des'> Ghi chú</p>
                                        <pre className='schedule-everyday'>{product.note} </pre>
                                    </div>
                            }

                            {/* {activeTab === "tab2" ?
                    <div><pre>{product.policy} </pre></div> :
                    <div><pre>{product.note} </pre></div>
                }
                {activeTab === "tab3" ?
                    <div><pre>{product.note} </pre></div> :
                    <div><pre>{product.overview} </pre> </div>
                } */}
                        </div>
                    </div>
                </div>
                <div>

                    {/* <Dialog className='dialog' open={open} onClose={handleClose} maxWidth="xl">

                    <h6>Khách hàng nhập thông tin cá nhân</h6>
                        <DialogContent>
                        <form onSubmit={(e) => SubmitInfo(e)} className='form-hotle-checkout'>
                  <h6 className="text-uppercase">Tên khách hàng</h6>
                  <div className="inputbox mt-3"> <input type="text" onChange={(e) => handle(e)} id="fullname" value={data.fullname} className="form-control" required="required" /> <span>Nhập tên khách hàng</span> </div>

                  <h6 className="text-uppercase">Số CMT/CCCD</h6>
                  <div className="inputbox mt-3"> <input type="number" onChange={(e) => handle(e)} id="cmt" value={data.cmt} className="form-control" required="required" /> <span>Nhập số CMT/CCCD</span> </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2"> <input type="number" onChange={(e) => handle(e)} id="phonenumber" value={data.phonenumber} className="form-control" required="required" /> <i className="fa fa-credit-card"></i> <span>Số điện thoại</span> </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-row">
                        <div className="inputbox mt-3 mr-2"> <input type="text" onChange={(e) => handle(e)} id="email" value={data.email} className="form-control" required="required" /> <span>Email</span> </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 mb-4">
                    <h6 className="text-uppercase">Địa chỉ</h6>
                    <div className="row mt-2">
                      <div className="inputbox mt-3"> <input type="text" onChange={(e) => handle(e)} id="address" value={data.address} className="form-control" required="required" /> <span>Địa chỉ</span> </div>
                    </div>

                    <div className="row mt-2">

                      <div className="inputbox mt-3"> <input type="text" onChange={(e) => handle(e)} id="note" value={data.note} className="form-control" required="required" /> <span>Ghi chú</span> </div>
                    </div>
                  </div>
                  <div className='action'>
                  <button className='btn-hotel-des-popup' onClick={handleClose}>Thoát</button>
                  <button type='submit' className='btn-hotel-des-popup'>Liên hệ   </button>
                 
                  </div>
                 
                </form>
                        </DialogContent>
                    
                    </Dialog> */}
                </div>

            </>
        )
    }
    return (
        <div className=''>
            <Header />
            <div>{loading ? <Loading /> : <ShowProduct />} </div>
            <Footer />
        </div>
    )
}

export default DetailHotel
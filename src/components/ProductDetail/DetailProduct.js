import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css';
import img1 from '../Asset/course1-img.jpg';
import img2 from '../Asset/course2-img.jpg';
import img3 from '../Asset/course3-img.jpg';
import { Link, useHistory } from 'react-router-dom';
import { Tabs, Tab, Button, Collapse } from 'react-bootstrap'
import NumbersIcon from '@mui/icons-material/Numbers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TodayIcon from '@mui/icons-material/Today';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Header from '../Header';
import Footer from '../Footer/footer';
import { addCart } from '../../Redux/Action';
import { useSelector, useDispatch } from 'react-redux';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SellIcon from '@mui/icons-material/Sell';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';


const DetailProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [openNote, setOpenNote] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");
    const history = useHistory();

    const dispatch = useDispatch()
    const addProduct = (product) => {

        dispatch(addCart(product))

        if (localStorage.getItem("user_auth")) {
            history.push('/Checkout')

        }
        else {
            history.push('/Login')
            alert("B???n c???n ph???i ????ng nh???p tr?????c ti??n !!!");
        }
    }


    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/review/api/detailtour/${id}`)
            setProduct(await response.json())
            setLoading(false);
        }
        getProduct();
    }, []);


    const handleTab1 = () => {
        setActiveTab("tab1");
    }
    const handletab2 = () => {
        setActiveTab("tab2")
    }
    const handletab3 = () => {
        setActiveTab("tab3")
    }

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <div className='main'>
                {/* <div className='des-main'>
                    <p className='nametour-des'> {product.nametour} </p>
                    <div className=' info'>
                        <div className='img-slide'>
                            <img className='imgdes' src={"http://localhost:8080/uploads/" + product.imgURL} />
                            <div className='imgdes-small'>
                                <img className='imgdes-small-s' src={img1} />
                                <img className='imgdes-small-s' src={img2} />
                                <img className='imgdes-small-s' src={img3} />
                            </div>
                        </div>
                        <div className='info-price'>
                            <table class="table">
                                <thead><b className='ttdes-tbl'>Th??ng tin tour</b></thead>
                                <tbody>
                                    <tr className='table-info'>
                                        <td scope="col" className='tb '><NumbersIcon /> M?? Tour</td>
                                        <td cope="col" className='tb'>{product.tourId}</td>
                                    </tr>
                                    <tr className='table-info'>
                                        <td scope="col" className='tb '><AccessTimeIcon /> Th???i gian:</td>
                                        <td cope="col" className='tb'>{product.time}</td>
                                    </tr>
                                    <tr className='table-light'>
                                        <td scope="col" className='tb '><CalendarMonthIcon /> Kh???i h??nh:</td>
                                        <td cope="col" className='tb'>{product.start}</td>
                                    </tr>
                                    <tr className='table-info'>
                                        <td scope="col" className='tb '><FmdGoodIcon /> Xu???t ph??t</td>
                                        <td cope="col" className='tb'>{product.place}</td>
                                    </tr>
                                    <tr className='table-light'>
                                        <td scope="col" className='tb '><FlightLandIcon /> ??i???m ?????n:</td>
                                        <td cope="col" className='tb'>{product.arrival}</td>
                                    </tr>

                                </tbody>

                            </table>

                            <span className='price-btn '>
                                <div className='pricedes'>Gi?? t???: {product.pricetxt}?? </div>

                                <Link to='/Checkout'> <div onClick={() => addProduct(product)}><button type='submit' className="btn btn-primary btn-lg disabled btn-des" role="button" aria-disabled="true">?????t tour </button></div></Link>
                            </span>

                        </div>
                    </div>


                </div> */}
                <div className='detail-hotel'>
                    <div className='title-hotel'>{product.nametour}</div>
                    <div className='img-option'>
                        <img className='img-det-hot' src={"http://localhost:8080/uploads/" + product.imgURL} />
                        <div className='utilities'>
                            <div><b className='ttdes-tbl'>Th??ng tin tour</b></div>
                            <ul className='utiulties-option'>
                                <li className='tb'><NumbersIcon /> M?? Tour:  {product.tourId}</li>
                                <li className='tb'><AccessTimeIcon /> Th???i gian: {product.time}</li>
                                <li className='tb'><CalendarMonthIcon /> Kh???i h??nh: {product.start}</li>
                                <li className='tb'><FmdGoodIcon /> Xu???t ph??t: {product.place}</li>
                                <li className='tb'><FlightLandIcon /> ??i???m ?????n: {product.arrival}</li>
                                {
                                    product.remaining == 0
                                        ?
                                        <div> <li className='tb'><HorizontalSplitIcon />S??? l?????ng: ???? h???t </li> </div>
                                        :
                                        <div><li className='tb'><HorizontalSplitIcon />S??? l?????ng: {product.remaining} </li></div>
                                }

                            </ul>
                            <div className='pricedes'>Gi?? t???: {(product.price)} VN??</div>
                            {/* <Link to='/Checkout'> */}
                            {
                                product.remaining == 0
                                    ?
                                    <div className='btn-noti'>B???n kh??ng th??? ?????t Tour n??y v?? s??? l?????ng ?????t Tour ???? h???t </div>
                                    :
                                    <div className='btn-hotel-des' onClick={() => addProduct(product)}>?????t ngay </div>
                            }

                            {/* </Link> */}



                        </div>
                    </div>
                    <div className='hotel-des'>{product.description} </div>
                </div>

                {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title={<div className='btn-tab btn btn-primary btn-lg disabled'>L???ch tr??nh</div>} >
                        <div className='schedule '>

                            <p className='day'>Ng??y 1:</p>
                            <pre className='schedule-everyday'>{product.scheduleday1} </pre>

                            <p className='day'>Ng??y 2:</p>
                            <pre className='schedule-everyday'>{product.scheduleday2} </pre>

                            <p className='day'>Ng??y 3:</p>
                            <pre className='schedule-everyday'>{product.scheduleday3} </pre>

                            <p className='day'>Ng??y 4:</p>
                            <pre className='schedule-everyday'>{product.scheduleday4} </pre>

                        </div>
                    </Tab>
                    <Tab eventKey="profile" title={<div className='btn-tab btn btn-primary btn-lg disabled'>Ch?? ?? </div>}>
                        <div className='schedule'>
                            <div className='day'> L??u ?? </div>
                            <pre className='schedule-everyday'> {product.note} </pre>
                        </div>
                    </Tab>
                </Tabs> */}

                {/* <iframe src={product.position} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/> */}


                {/* <div className='schedule '>
                    <p className='title '> L???ch tr??nh</p>
                    <div className='day'
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}

                    >
                        <TodayIcon />  Ng??y 1:
                    </div>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <pre className='schedule-everyday'>{product.scheduleday1} </pre>
                        </div>
                    </Collapse>
                    <br></br>
                    <div
                        className='day'
                        onClick={() => setOpen2(!open2)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <TodayIcon />  Ng??y 2:
                    </div>
                    <Collapse in={open2}>
                        <div id="example-collapse-text">
                            <pre className='schedule-everyday'>{product.scheduleday2} </pre>
                        </div>
                    </Collapse>
                    <br></br>
                    <div
                        className='day'
                        onClick={() => setOpen3(!open3)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open3}
                    >
                        <TodayIcon />  Ng??y 3:
                    </div>
                    <Collapse in={open3}>
                        <div id="example-collapse-text">
                            <pre className='schedule-everyday'>{product.scheduleday3} </pre>
                        </div>
                    </Collapse>
                    <br></br>
                    <div
                        className='day'
                        onClick={() => setOpen4(!open4)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open4}
                    >
                        <TodayIcon />   Ng??y 4:
                    </div>
                    <Collapse in={open4}>
                        <div id="example-collapse-text">
                            <pre className='schedule-everyday'>{product.scheduleday4} </pre>
                        </div>
                    </Collapse>


                    <p className='title'> L??u ??</p>
                    <div
                        className='day'
                        onClick={() => setOpenNote(!openNote)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openNote}
                    >
                        <NoteAltIcon /> L??u ??
                    </div>
                    <Collapse in={openNote}>
                        <div id="example-collapse-text">
                            <pre className='schedule-everyday'>{product.note} </pre>
                        </div>
                    </Collapse>

                </div> */}

                <div className='schedule '>
                    <div className='tab-product'>
                        <li id='tab-btn' onClick={handleTab1} className={activeTab === "tab1" ? "lively" : ""}>L???ch tr??nh</li>
                        <li id='tab-btn' onClick={handletab2} className={activeTab === "tab2" ? "lively" : ""}>Ch?? ??</li>
                        <li id='tab-btn' onClick={handletab3} className={activeTab === "tab3" ? "lively" : ""}>V??? tr??</li>
                    </div>
                    <div className='outlet'>
                        {activeTab === "tab1" ? <div>
                            <p className='title-des'> L???ch tr??nh</p>

                            {
                                product.scheduleday1 !== null ?
                                    <div>
                                        <div className='day'
                                            onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}

                                        >
                                            <TodayIcon />  Ng??y 1:
                                        </div>
                                        <Collapse in={open}>
                                            <div id="example-collapse-text">
                                                <pre className='schedule-everyday'>{product.scheduleday1} </pre>
                                            </div>
                                        </Collapse>
                                    </div>
                                    :
                                    <div></div>
                            }
                            <br></br>

                            {
                                product.scheduleday2 !== null ?
                                    <div>
                                        <div
                                            className='day'
                                            onClick={() => setOpen2(!open2)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}
                                        >
                                            <TodayIcon />  Ng??y 2:
                                        </div>
                                        <Collapse in={open2}>
                                            <div id="example-collapse-text">
                                                <pre className='schedule-everyday'>{product.scheduleday2} </pre>
                                            </div>
                                        </Collapse>
                                    </div>
                                    :
                                    <div></div>
                            }
                            <br></br>

                            {
                                product.scheduleday3 !== null ?
                                    <div>
                                        <div
                                            className='day'
                                            onClick={() => setOpen3(!open3)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open3}
                                        >
                                            <TodayIcon />  Ng??y 3:
                                        </div>
                                        <Collapse in={open3}>
                                            <div id="example-collapse-text">
                                                <pre className='schedule-everyday'>{product.scheduleday3} </pre>
                                            </div>
                                        </Collapse>

                                    </div>
                                    :
                                    <div></div>
                            }
                            <br></br>

                            {
                                product.scheduleday4 !== null ?
                                    <div>
                                        <div
                                            className='day'
                                            onClick={() => setOpen4(!open4)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open4}
                                        >
                                            <TodayIcon />   Ng??y 4:
                                        </div>
                                        <Collapse in={open4}>
                                            <div id="example-collapse-text">
                                                <pre className='schedule-everyday'>{product.scheduleday4} </pre>
                                            </div>
                                        </Collapse>
                                    </div>
                                    :
                                    <div></div>
                            }
                        </div> :
                            activeTab === "tab2" ?
                                <div>
                                    <p className='title-des'> L??u ??</p>
                                    <div
                                        className='day'
                                        onClick={() => setOpenNote(!openNote)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={openNote}
                                    >
                                        <NoteAltIcon /> L??u ??
                                    </div>
                                    <Collapse in={openNote}>
                                        <div id="example-collapse-text">
                                            <pre className='schedule-everyday'>{product.note} </pre>
                                        </div>
                                    </Collapse>
                                </div> :
                                <div>
                                    <p className='title-des'> V??? tr??</p>
                                    <iframe src={product.position} />

                                </div>

                        }
                    </div>
                </div>


            </div>

        )
    }
    return (
        <div className=''>
            <Header />
            <div className='body-des'>
                <div>{loading ? <Loading /> : <ShowProduct />}</div>
            </div>
            <Footer />
        </div>
    )
}
export default DetailProduct;

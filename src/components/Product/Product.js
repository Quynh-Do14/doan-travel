import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header';
import Search from '../Search/Search';
import background1 from '../Asset/bannertour4.jpg';
import Footer from '../Footer/footer';
import SearchRoute from '../Search/Search.routes';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import './Product.css'
const ProductItem = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);


    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/review/listtour`)
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }

    const ShowProduct = () => {
        return (

            <>

                <div className='row tour'>
                    {filter.map((product, index) => {
                        return (
                            <div className='col-4'>
                                <div key={index}>
                                    <div className='content'>
                                        <div>
                                            <img className='imgtour' src={"http://localhost:8080/uploads/" + product.imgURL} />
                                        </div>
                                        <div className='time-remain'> <b className='time'> <AccessTimeIcon />{product.time} </b>
                                        <div className='remaing-tour'>
                                            {
                                                product.remaining == 0
                                                    ?
                                                    <div>Số lượng: Đã hết </div>
                                                    :
                                                    <div>Số lượng: {product.remaining}</div>
                                            }
                                        </div>
                                        </div>

                                        <div className='nametour'>{product.nametour}  </div>

                                        <div className='price-time'>
                                            <div><b className='price'>{(product.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</b></div>
                                            <NavLink to={`/DetailProduct/${product.id}`}>
                                                <button type="button" className="btn btn-outline-danger">ĐẶT NGAY!!!</button>
                                            </NavLink>
                                        </div>
                                    </div>




                                </div>
                            </div>


                        )

                    })}
                </div>
            </>
        )
    }
    return (
        <div className=''>
            <Header />
            <img className='bg' src={background1} />
            <SearchRoute />
            <div className='container'>

                <h1> <p className='title'>Tour nổi bật</p></h1>
                <div>{loading ? <Loading /> : <ShowProduct />}</div>
            </div>

            <Footer />
        </div>
    )
}
export default ProductItem
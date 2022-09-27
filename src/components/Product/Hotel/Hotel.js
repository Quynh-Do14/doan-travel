import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../../Search/Search';
import bannerHotel from '../../Asset/bannertour4.jpg';
import SearchRoute from '../../Search/Search.routes';
import Header from '../../Header';
import Footer from '../../Footer/footer';
import HomeStay from '../HomeStay/HomeStay';



const Hotel = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);


    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/review/listhotel`)
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
                                    <div className='content-hotel'>
                                        <img className='imghotel' src={"http://localhost:8080/uploads/" + product.imgURL} />

                                       <NavLink to={`/DetailHotel/${product.id}`}><div className='namehotel'> {product.hotelName}  </div>
                                        <div className='price-time'>
                                            <div><b className='pricehotel'>Giá từ: {(product.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</b></div>
                                        </div>
                                        </NavLink> 
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
            <Header/>
            <img className='bg' src={bannerHotel} />
            <SearchRoute/>
            <div className='container'>

                <h1> <p className='title'>Khách sạn</p></h1>
                <div>{loading ? <Loading /> : <ShowProduct />}</div>
            </div>
        <Footer/>
        </div>
    )
}
export default Hotel;
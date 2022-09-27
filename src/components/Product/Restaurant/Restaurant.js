import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import bannerRes from '../../Asset/bannerres.jpeg';
import SearchRoute from '../../Search/Search.routes';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import './Restaurant.css'
import Header from '../../Header';
import Footer from '../../Footer/footer';
export const Restaurant = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);


    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/review/listRestaurant`)
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
                                    <div className='content-res'>
                                        <img className='imgres' src={"http://localhost:8080/uploads/" + product.imgURL} />
                                        <div className='name-addr'>
                                            <div className='nameres'> {product.restaurantName}  </div>
                                            <div className='address'><FmdGoodIcon />{product.address}</div>
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
            <img className='bg' src={bannerRes} />
            <SearchRoute />
            <div className='container'>

                <h1> <p className='title'>Nhà Hàng</p></h1>
                <div>{loading ? <Loading /> : <ShowProduct />}</div>
            </div>
            <Footer />
        </div>
    )
}

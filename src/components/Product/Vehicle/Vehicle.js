import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import bannerRes from '../../Asset/bannervehicle2.png';
import SearchRoute from '../../Search/Search.routes';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LoupeIcon from '@mui/icons-material/Loupe';
import './Vehicle.css'
import Header from '../../Header';
import Footer from '../../Footer/footer';
const Vehicle = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);


    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/review/listVehicle`)
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
                                    <div className='content-veh'>
                                        <img className='imgres' src={"http://localhost:8080/uploads/" + product.imgURL} />
                                        <div className='nameres'>{product.serviceName}  </div>
                                        <div className='veh-des'>
                                        <div className='producer'><DirectionsCarIcon/> {product.producer}</div>
                                        <div className='seat'><AirlineSeatReclineNormalIcon/> {product.seat} chỗ </div>
                                        <div className='detail'><LoupeIcon/> Chi tiết</div>
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
            <Header/>
            <img className='bg' src={bannerRes} />
            <SearchRoute/>
            <div className='container'>

                <h1> <p className='title'>Phương tiện</p></h1>
                <div>{loading ? <Loading /> : <ShowProduct />}</div>
            </div>
        <Footer/>
        </div>
        
    )
}
export default Vehicle;
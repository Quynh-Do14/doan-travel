import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../../Search/Search';
import bannerHotel from '../../Asset/bannertour4.jpg';
import Header from '../../Header';
import SearchRoute from '../../Search/Search.routes';
import Footer from '../../Footer/footer';





const HomeStay = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);


    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/review/listHomestay`)
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


                                        
                                       <NavLink to={`/DetailHotel/${product.id}`}><div className='namehotel'> {product.namehomestay}  </div></NavLink> 
                                       
{/*                                      <div className='price-time'>
                                            <div><b className='pricehotel'>Giá từ: {product.price} VNĐ</b></div>
                
                                        </div> */}
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

                <h1> <p className='title'>HomeStay</p></h1>
                <div>{loading ? <Loading /> : <ShowProduct />}</div>
            </div>
        <Footer/>
        </div>
    )
}
export default HomeStay;